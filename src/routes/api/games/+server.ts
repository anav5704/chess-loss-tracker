import { redirect, type RequestHandler, json } from '@sveltejs/kit';
import { PAGINATION_LIMIT } from '@/constants';
import { db } from '@/prisma';

export const GET: RequestHandler = async ({ url, locals }) => {
	const { user } = locals;

	if (!user) {
		redirect(303, '/login');
	}

	const cursor = url.searchParams.get('cursor') as string;
	const search = url.searchParams.get('search') as string;

	const games = await db.postgres.game.findMany({
		where: {
			userId: user.id,
			...(search && {
				OR: [
					{ opening: { contains: search, mode: 'insensitive' } },
					{ opponent: { contains: search, mode: 'insensitive' } },
					{ notes: { contains: search, mode: 'insensitive' } }
				]
			})
		},
		orderBy: {
			date: 'desc'
		},
		take: PAGINATION_LIMIT + 1,
		...(cursor && {
			cursor: { id: cursor },
			skip: 1
		})
	});

	const hasMore = games.length > PAGINATION_LIMIT;
	const slicedGames = hasMore ? games.slice(0, -1) : games;
	const nextCursor = hasMore ? slicedGames[slicedGames.length - 1].id : null;

	return json({
		games: slicedGames,
		nextCursor
	});
};
