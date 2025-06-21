import { svelteKitHandler } from 'better-auth/svelte-kit';
import { redirect, type Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { auth } from '@/lib/auth';

const setSession: Handle = async ({ event, resolve }) => {
	return svelteKitHandler({ auth, event, resolve });
};

export const authGuard: Handle = async ({ event, resolve }) => {
	const { url, request } = event;

	const session = await auth.api.getSession({
		headers: request.headers
	});

	if (session?.user && ['/login', '/signup'].includes(url.pathname)) {
		return redirect(303, '/');
	}

	if (!session?.user && ['/'].includes(url.pathname)) {
		return redirect(303, '/login');
	}

	return await resolve(event);
};

export const handle = sequence(setSession, authGuard);
