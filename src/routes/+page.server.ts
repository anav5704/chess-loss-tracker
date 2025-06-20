import { auth } from '@/lib/auth/index.js';
import { redirect } from '@sveltejs/kit';

export const load = async ({ request }) => {
	const session = await auth.api.getSession({
		headers: request.headers
	});

	if (!session) {
		redirect(303, '/signup');
	}

	return {
		user: session.user
	};
};
