import { db } from '@/prisma';

export const load = async ({ locals }) => {
	const stream = async () => {
		const games = await db.game.findMany({
			where: {
				userId: locals.user?.id
			}
		});

		return { games };
	};

	return { stream: stream() };
};
