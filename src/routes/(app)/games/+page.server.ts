import { redirect, type Actions } from '@sveltejs/kit';
import { parsePgn } from '@/lib/chess/parsePgn';
import { db } from '@/prisma';

export const load = async ({ locals }) => {
	const stream = async () => {
		const games = await db.postgres.game.findMany({
			where: {
				userId: locals.user?.id
			},
			orderBy: {
				createdAt: 'desc'
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

		await db.postgres.game.create({
			data: {
				userId: user.id,
				pgn,
				notes,
				...parsedPgn
			}
		});

		redirect(303, '/games');
	},

	updateGame: async ({ request, locals }) => {
		const { user } = locals;

		if (!user) {
			redirect(303, '/login');
		}

		const data = await request.formData();

		const id = data.get('id') as string;
		const pgn = data.get('pgn') as string;
		const notes = data.get('notes') as string;

		const { parsedPgn } = await parsePgn({ user, pgn });

		await db.postgres.game.update({
			where: {
				id
			},
			data: {
				pgn,
				notes,
				...parsedPgn
			}
		});

		redirect(303, '/games');
	}
};
