import { db } from '@/prisma';

export const load = async () => {
	const metrics = async () => {
		const totalGames = await db.postgres.game.count();

		const reviewedGames = await db.postgres.game.count({
			where: {
				reviewed: true
			}
		});

		const averageMoves = await db.postgres.game.aggregate({
			_avg: {
				moveCount: true
			}
		});

		const averageAccuracy = await db.postgres.analysis.aggregate({
			_avg: {
				accuracy: true
			}
		});

		return {
			totalGames,
			reviewedGames: (reviewedGames === 0 ? 0 : (reviewedGames / totalGames) * 100).toFixed(1) + '%',
			averageMoves: averageMoves._avg.moveCount?.toFixed(0),
			averageAccuracy: averageAccuracy._avg.accuracy?.toFixed(1) + '%'
		};
	};

	return {
		metrics: metrics()
	};
};
