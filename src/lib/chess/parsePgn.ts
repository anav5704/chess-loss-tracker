import { Color, GamePhase, Site, Termination, TimeControl, type User } from '@prisma/client';
import { open, Database } from 'sqlite';
import { Chess } from 'chess.js';
import sqlite3 from 'sqlite3';

interface ParsedPgn {
	site: Site;
	url: string;
	opponent: string;
	date: Date;
	timeControl: TimeControl;
	opening: string;
	moveCount: number;
	termination: Termination;
	gamePhase: GamePhase;
	color: Color;
}

const formatMoves = (history: string[]): string => {
	const formatted: string[] = [];
	for (let i = 0; i < history.length; i += 2) {
		const moveNumber = Math.floor(i / 2) + 1;
		const whiteMove = history[i];
		const blackMove = history[i + 1] || '';
		formatted.push(`${moveNumber}. ${whiteMove} ${blackMove}`.trim());
	}
	return formatted.join(' ');
};

const getSite = (siteHeader: string): Site => {
	return siteHeader === 'Chess.com' ? Site.CHESS_COM : Site.LICHESS_ORG;
};

const getGamePhase = (moveCount: number): GamePhase => {
	if (moveCount < 15) return GamePhase.OPENING;
	if (moveCount < 30) return GamePhase.MIDDLE_GAME;
	return GamePhase.END_GAME;
};

const getColor = (user: User, white: string): Color => {
	return user.ccUsername === white || user.loUsername === white ? Color.WHITE : Color.BLACK;
};

const getOpponent = (color: Color, headers: any): string => {
	return color === Color.WHITE ? headers.Black : headers.White;
};

const getTimeControl = (time: string): TimeControl => {
	const baseSeconds = parseInt(time.split('+')[0]);
	if (baseSeconds <= 120) return TimeControl.BULLET;
	if (baseSeconds <= 300) return TimeControl.BLITZ;
	if (baseSeconds <= 3600) return TimeControl.RAPID;
	return TimeControl.CLASSICAL;
};

const getTermination = (pgn: string): Termination => {
	if (pgn.includes('checkmate')) return Termination.CHECKMATE;
	if (pgn.includes('resign')) return Termination.RESIGNATION;
	return Termination.TIMEOUT;
};

const getUrl = (headers: any): string => {
	return headers.Link || headers.Site;
};

const getMoveCount = (history: string[]): number => {
	return history.length / 2;
};

const getDate = (date: string): Date => {
	return new Date(date);
};

const getOpening = async (db: Database, eco: string, moves: string): Promise<string> => {
	const result = await db.get(
		"SELECT name FROM openings WHERE eco = ? AND ? LIKE pgn || '%' ORDER BY LENGTH(pgn) DESC",
		eco,
		moves
	);
	return result?.name || 'Unknown';
};

export const parsePgn = async ({ user, pgn }: { user: User; pgn: string }) => {
	const game = new Chess();
	game.loadPgn(pgn);

	const db = await open({ filename: 'openings.db', driver: sqlite3.Database });
	const headers = game.getHeaders();
	const history = game.history();
	const moves = formatMoves(history);

	const parsedPgn: ParsedPgn = {
		site: getSite(headers.Site),
		url: getUrl(headers),
		opponent: getOpponent(getColor(user, headers.White), headers),
		date: getDate(headers.Date),
		timeControl: getTimeControl(headers.TimeControl),
		opening: await getOpening(db, headers.ECO, moves),
		moveCount: getMoveCount(history),
		termination: getTermination(pgn),
		gamePhase: getGamePhase(getMoveCount(history)),
		color: getColor(user, headers.White)
	};

	return { parsedPgn };
};
