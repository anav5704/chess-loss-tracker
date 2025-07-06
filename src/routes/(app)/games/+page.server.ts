import { redirect, type Actions } from '@sveltejs/kit';
import { parsePgn } from '@/lib/chess/parsePgn';
import { db } from '@/prisma';

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
	},

	deleteGame: async ({ request, locals }) => {
		const { user } = locals;

		if (!user) {
			redirect(303, '/login');
		}

		const data = await request.formData();

		const id = data.get('id') as string;

		await db.postgres.game.delete({
			where: {
				id
			}
		});

		redirect(303, '/games');
	}
};
