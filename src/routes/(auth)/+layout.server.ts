import { redirect } from '@sveltejs/kit';
import { auth } from '@/lib/auth';

export const load = async ({ request }) => {
	const session = await auth.api.getSession({
		headers: request.headers
	});

	if (session) {
		redirect(303, '/');
	}
};
