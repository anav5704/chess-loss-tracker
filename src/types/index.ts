export type Game = {
	id: string;
	userId: string;
	pgn: string;
	site: string;
	url: string;
	opponent: string;
	date: Date;
	timeControl: string;
	opening: string;
	moveCount: number;
	termination: string;
	gamePhase: string;
	color: string;
	notes: string;
	reviewed: boolean;
	createdAt: string;
	updatedAt: string;
};

export enum Site {
	CHESS_COM = 'CHESS_COM',
	LICHESS_ORG = 'LICHESS_ORG',
	OTHER = 'OTHER'
}

export enum TimeControl {
	BULLET = 'BULLET',
	BLITZ = 'BLITZ',
	RAPID = 'RAPID',
	CLASSICAL = 'CLASSICAL'
}

export enum GamePhase {
	OPENING = 'OPENING',
	MIDDLE_GAME = 'MIDDLE_GAME',
	END_GAME = 'END_GAME'
}

export enum Termination {
	CHECKMATE = 'CHECKMATE',
	RESIGNATION = 'RESIGNATION',
	TIMEOUT = 'TIMEOUT'
}

export enum Color {
	WHITE = 'WHITE',
	BLACK = 'BLACK'
}
