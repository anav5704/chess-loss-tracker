import { Color, GamePhase, Site, Termination, TimeControl, type User } from '@prisma/client';
import { Chess } from 'chess.js';
import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

export const parsePgn = async ({ user, pgn }: { user: User; pgn: string }) => {
	// TODO: refactor this function and make logic more accurate

	const { ccUsername, loUsername } = user;

	const game = new Chess();
	game.loadPgn(pgn);

	const headers = game.getHeaders();

	const db = await open({
		filename: 'openings.db',
		driver: sqlite3.Database
	});

	const result = await db.get('SELECT name FROM openings WHERE eco = ?', headers.ECO);
	const opening = result.name;

	const site = headers.Site === 'Chess.com' ? Site.CHESS_COM : Site.LICHESS_ORG;
	const url = headers.Link || headers.Site;
	const moveCount = game.history().length / 2;
	const date = new Date(headers.Date);
	const gamePhase =
		moveCount < 15
			? GamePhase.OPENING
			: moveCount < 30
				? GamePhase.MIDDLE_GAME
				: GamePhase.END_GAME;
	const white = headers.White;
	const color = ccUsername === white || loUsername === white ? Color.WHITE : Color.BLACK;
	const opponent = color === Color.WHITE ? headers.Black : headers.White;

	let timeControl;

	const time = headers.TimeControl;
	const baseSeconds = parseInt(time.split('+')[0]);
	if (baseSeconds <= 120) timeControl = TimeControl.BULLET;
	else if (baseSeconds <= 300) timeControl = TimeControl.BLITZ;
	else if (baseSeconds <= 3600) timeControl = TimeControl.RAPID;
	else timeControl = TimeControl.CLASSICAL;

	let termination;
	if (pgn.includes('checkmate')) {
		termination = Termination.CHECKMATE;
	} else if (pgn.includes('resign')) {
		termination = Termination.RESIGNATION;
	} else {
		termination = Termination.TIMEOUT;
	}

	return {
		parsedPgn: {
			site,
			url,
			opponent,
			date,
			timeControl,
			opening,
			moveCount,
			termination,
			gamePhase,
			color
		}
	};
};
