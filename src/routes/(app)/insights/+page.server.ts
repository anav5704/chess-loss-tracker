import { redirect } from '@sveltejs/kit';
import { db } from '@/prisma';
import { format } from 'date-fns';

export const load = async ({ locals }) => {
	const { user } = locals;

	if (!user) {
		redirect(303, '/login');
	}

	const metrics = async () => {
		const totalGames = await db.postgres.game.count({
			where: {
				userId: user.id
			}
		});

		const reviewedGames = await db.postgres.game.count({
			where: {
				userId: user.id,
				reviewed: true
			}
		});

		const averageMoves = await db.postgres.game.aggregate({
			where: {
				userId: user.id
			},
			_avg: {
				moveCount: true
			}
		});

		const averageAccuracy = await db.postgres.analysis.aggregate({
			where: {
				game: {
					userId: user.id
				}
			},
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

	const today = new Date();

	const overtime = async () => {
		const games = await db.postgres.game.findMany({
			where: {
				userId: user.id,
				date: {
					lte: today,
					gte: new Date(today.getDate() - 7)
				}
			},
			select: {
				date: true,
				analysis: {
					select: {
						accuracy: true
					}
				}
			},
			orderBy: {
				date: 'asc'
			}
		});

		const accuracyByDate = new Map<string, { sum: number; count: number }>();
		const lossesByDate = new Map<string, number>();

		for (const game of games) {
			const dateStr = format(game.date, 'yyyy-MM-dd');

			lossesByDate.set(dateStr, (lossesByDate.get(dateStr) || 0) + 1);

			const accuracy = game.analysis?.accuracy ?? 0;
			const current = accuracyByDate.get(dateStr) || { sum: 0, count: 0 };
			current.sum += accuracy;
			current.count += 1;
			accuracyByDate.set(dateStr, current);
		}

		const accuracyData = Array.from(accuracyByDate.entries()).map(([date, { sum, count }]) => ({
			date: new Date(date),
			value: Number((sum / count).toFixed(1))
		}));

		const lossData = Array.from(lossesByDate.entries()).map(([date, count]) => ({
			date: new Date(date),
			value: count
		}));

		return {
			accuracyData,
			lossData
		};
	};

	return {
		metrics: metrics(),
		overtime: overtime()
	};
};
