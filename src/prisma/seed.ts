import { Color, GamePhase, LossType, PrismaClient, Site, TimeControl } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
	const userId = 'CsEky0wVKhJReDJ9PvvaEz2WC7WIHlJn';

	const user = await prisma.user.findUnique({
		where: { id: userId }
	});

	if (!user) {
		console.error(
			'User with ID CsEky0wVKhJReDJ9PvvaEz2WC7WIHlJn not found. Please create the user first.'
		);
		return;
	}

	// Sample PGN data with varied attributes
	const games = [
		{
			pgn: '[Event "Casual Game"] [Site "CHESS_COM"] [Date "2025.06.01"] [White "anav5704"] [Black "ChessMasterX"] [Result "0-1"] [TimeControl "180+2"] [Termination "Resignation"] 1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Nxe4 6. d4 exd4 7. Re1 d5 8. Nxd4 Bd6 9. Nxc6 bxc6 10. Qxd5 O-O 11. Qxe4 Re8 12. Qd3 Bxh2+ 13. Kxh2 Qh4+ 14. Kg1 Qxf2+ 15. Kh1 Re6 0-1',
			site: 'CHESS_COM',
			opponent: 'ChessMasterX',
			date: new Date('2025-06-01'),
			timeControl: 'BLITZ',
			opening: 'Ruy Lopez',
			moveCount: 15,
			lossType: 'RESIGNATION',
			gamePhase: 'MIDDLE_GAME',
			color: 'WHITE'
		},
		{
			pgn: '[Event "Rated Game"] [Site "LICHESS_ORG"] [Date "2025.06.02"] [White "ChessBot"] [Black "anav5704"] [Result "1-0"] [TimeControl "60"] [Termination "Checkmate"] 1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Bg5 e6 7. f4 Qb6 8. Qd2 Qxb2 9. Rb1 Qa3 10. e5 dxe5 11. fxe5 Nfd7 12. Ne4 h6 13. Bh4 g5 14. exf6 gxh4 15. Ne6 Bxe6 16. Qd8+ 1-0',
			site: 'LICHESS_ORG',
			opponent: 'ChessBot',
			date: new Date('2025-06-02'),
			timeControl: 'BULLET',
			opening: 'Sicilian Defense',
			moveCount: 16,
			lossType: 'CHECKMATE',
			gamePhase: 'END_GAME',
			color: 'BLACK'
		},
		// Add 8 more unique games with varied data
		{
			pgn: '[Event "Daily Game"] [Site "CHESS_COM"] [Date "2025.06.03"] [White "anav5704"] [Black "QuickDraw"] [Result "0-1"] [TimeControl "600+5"] [Termination "Timeout"] 1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 O-O 5. Bd3 d5 6. Nf3 c5 7. O-O Nc6 8. a3 Bxc3 9. bxc3 dxc4 10. Bxc4 Qe7 11. Bb2 e5 12. dxe5 Nxe5 13. Nxe5 Qxe5 14. f3 Bd7 15. Qd2 Rad8 16. Rad1 Rfe8 17. e4 Qg5 18. Qxg5 h6 0-1',
			site: 'CHESS_COM',
			opponent: 'QuickDraw',
			date: new Date('2025-06-03'),
			timeControl: 'RAPID',
			opening: "Queen's Gambit Declined",
			moveCount: 18,
			lossType: 'TIMEOUT',
			gamePhase: 'MIDDLE_GAME',
			color: 'WHITE'
		},
		{
			pgn: '[Event "Casual Match"] [Site "LICHESS_ORG"] [Date "2025.06.04"] [White "TacticKing"] [Black "anav5704"] [Result "1-0"] [TimeControl "1800"] [Termination "Resignation"] 1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Nxe4 6. d4 exd4 7. Re1 d5 8. Nxd4 Bd6 9. Nxc6 bxc6 10. Qxd5 O-O 11. Qxe4 Re8 12. Qd3 Bxh2+ 13. Kxh2 Qh4+ 14. Kg1 Qxf2+ 15. Kh1 Re6 0-1',
			site: 'LICHESS_ORG',
			opponent: 'TacticKing',
			date: new Date('2025-06-04'),
			timeControl: 'CLASSICAL',
			opening: 'Ruy Lopez',
			moveCount: 15,
			lossType: 'RESIGNATION',
			gamePhase: 'OPENING',
			color: 'BLACK'
		},
		{
			pgn: '[Event "Quick Match"] [Site "CHESS_COM"] [Date "2025.06.05"] [White "anav5704"] [Black "FastPlayer"] [Result "0-1"] [TimeControl "60"] [Termination "Checkmate"] 1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Be2 e5 7. Nf3 Qc7 8. O-O Be7 9. h3 O-O 10. Be3 b5 11. a3 Bb7 12. b4 Nbd7 13. Qd2 Rac8 14. Rad1 Nc5 15. Bxc5 dxc5 16. bxc5 Qxc5 17. e5 Nd5 18. Nxd5 Bxd5 0-1',
			site: 'CHESS_COM',
			opponent: 'FastPlayer',
			date: new Date('2025-06-05'),
			timeControl: 'BULLET',
			opening: 'Sicilian Defense',
			moveCount: 18,
			lossType: 'CHECKMATE',
			gamePhase: 'END_GAME',
			color: 'WHITE'
		},
		{
			pgn: '[Event "Rated Game"] [Site "LICHESS_ORG"] [Date "2025.06.06"] [White "SkillMaster"] [Black "anav5704"] [Result "1-0"] [TimeControl "300+3"] [Termination "Timeout"] 1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. cxd5 exd5 5. Bg5 c6 6. e3 Be7 7. Bd3 O-O 8. Nf3 Nbd7 9. O-O Re8 10. Rc1 Nf8 11. Ne2 Ng6 12. Ng3 Bd6 13. Qc2 h6 14. Bxf6 Qxf6 15. e4 dxe4 16. Nxe4 Bc7 17. Rfe1 Be6 18. b3 Rad8 0-1',
			site: 'LICHESS_ORG',
			opponent: 'SkillMaster',
			date: new Date('2025-06-06'),
			timeControl: 'RAPID',
			opening: "Queen's Gambit Declined",
			moveCount: 18,
			lossType: 'TIMEOUT',
			gamePhase: 'MIDDLE_GAME',
			color: 'BLACK'
		},
		{
			pgn: '[Event "Friendly Game"] [Site "CHESS_COM"] [Date "2025.06.07"] [White "anav5704"] [Black "GrandTactician"] [Result "0-1"] [TimeControl "1800"] [Termination "Resignation"] 1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Nxe4 6. d4 exd4 7. Re1 d5 8. Nxd4 Bd6 9. Nxc6 bxc6 10. Qxd5 O-O 11. Qxe4 Re8 12. Qd3 Bxh2+ 13. Kxh2 Qh4+ 14. Kg1 Qxf2+ 15. Kh1 Re6 0-1',
			site: 'CHESS_COM',
			opponent: 'GrandTactician',
			date: new Date('2025-06-07'),
			timeControl: 'CLASSICAL',
			opening: 'Ruy Lopez',
			moveCount: 15,
			lossType: 'RESIGNATION',
			gamePhase: 'OPENING',
			color: 'WHITE'
		},
		{
			pgn: '[Event "Speed Game"] [Site "LICHESS_ORG"] [Date "2025.06.08"] [White "QuickThinker"] [Black "anav5704"] [Result "1-0"] [TimeControl "60"] [Termination "Checkmate"] 1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Be2 e5 7. Nf3 Qc7 8. O-O Be7 9. h3 O-O 10. Be3 b5 11. a3 Bb7 12. b4 Nbd7 13. Qd2 Rac8 14. Rad1 Nc5 15. Bxc5 dxc5 16. bxc5 Qxc5 17. e5 Nd5 18. Nxd5 Bxd5 0-1',
			site: 'LICHESS_ORG',
			opponent: 'QuickThinker',
			date: new Date('2025-06-08'),
			timeControl: 'BULLET',
			opening: 'Sicilian Defense',
			moveCount: 18,
			lossType: 'CHECKMATE',
			gamePhase: 'END_GAME',
			color: 'BLACK'
		},
		{
			pgn: '[Event "Casual Play"] [Site "CHESS_COM"] [Date "2025.06.09"] [White "anav5704"] [Black "StrategyPro"] [Result "0-1"] [TimeControl "300+3"] [Termination "Timeout"] 1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 O-O 5. Bd3 d5 6. Nf3 c5 7. O-O Nc6 8. a3 Bxc3 9. bxc3 dxc4 10. Bxc4 Qe7 11. Bb2 e5 12. dxe5 Nxe5 13. Nxe5 Qxe5 14. f3 Bd7 15. Qd2 Rad8 16. Rad1 Rfe8 17. e4 Qg5 18. Qxg5 h6 0-1',
			site: 'CHESS_COM',
			opponent: 'StrategyPro',
			date: new Date('2025-06-09'),
			timeControl: 'RAPID',
			opening: "Queen's Gambit Declined",
			moveCount: 18,
			lossType: 'TIMEOUT',
			gamePhase: 'MIDDLE_GAME',
			color: 'WHITE'
		},
		{
			pgn: '[Event "Long Game"] [Site "LICHESS_ORG"] [Date "2025.06.10"] [White "MasterMind"] [Black "anav5704"] [Result "1-0"] [TimeControl "1800"] [Termination "Resignation"] 1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Nxe4 6. d4 exd4 7. Re1 d5 8. Nxd4 Bd6 9. Nxc6 bxc6 10. Qxd5 O-O 11. Qxe4 Re8 12. Qd3 Bxh2+ 13. Kxh2 Qh4+ 14. Kg1 Qxf2+ 15. Kh1 Re6 0-1',
			site: 'LICHESS_ORG',
			opponent: 'MasterMind',
			date: new Date('2025-06-10'),
			timeControl: 'CLASSICAL',
			opening: 'Ruy Lopez',
			moveCount: 15,
			lossType: 'RESIGNATION',
			gamePhase: 'OPENING',
			color: 'BLACK'
		}
	];

	// Seed the database
	for (const game of games) {
		await prisma.game.create({
			data: {
				userId,
				pgn: game.pgn,
				site: game.site as Site,
				opponent: game.opponent,
				date: game.date,
				timeControl: game.timeControl as TimeControl,
				opening: game.opening,
				moveCount: game.moveCount,
				lossType: game.lossType as LossType,
				gamePhase: game.gamePhase as GamePhase,
				color: game.color as Color,
				reviewed: false,
				notes: 'note'
			}
		});
		console.log(`Created game for ${game.opponent} on ${game.date}`);
	}

	console.log('Seeding completed successfully!');
}

main()
	.catch((e) => {
		console.error('Seeding failed:', e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
