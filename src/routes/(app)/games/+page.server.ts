import { redirect, type Actions } from '@sveltejs/kit';
import { parsePgn } from '@/lib/chess/parsePgn';
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

export const actions: Actions = {
	createGame: async ({ request, locals }) => {
		const { user } = locals;

		if (!user) {
			redirect(303, '/login');
		}

		const data = await request.formData();

		const pgn = data.get('pgn') as string;
		const notes = data.get('notes') as string;

		const { parsedPgn } = await parsePgn({ user, pgn });

		await db.game.create({
			data: {
				userId: user.id,
				site: parsedPgn.site,
				opponent: parsedPgn.opponent,
				date: parsedPgn.date,
				timeControl: parsedPgn.timeControl,
				opening: parsedPgn.opening,
				moveCount: parsedPgn.moveCount,
				termination: parsedPgn.termination,
				gamePhase: parsedPgn.gamePhase,
				color: parsedPgn.color,
				pgn,
				notes
			}
		});
	}
};
