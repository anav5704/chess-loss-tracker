import { svelteKitHandler } from 'better-auth/svelte-kit';
import { redirect, type Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { auth } from '@/lib/auth';

const setSession: Handle = async ({ event, resolve }) => {
	return svelteKitHandler({ auth, event, resolve });
};

export const authGuard: Handle = async ({ event, resolve }) => {
	const { url, locals, request } = event;
	const protectedRoutes = ['/games', '/analysis', '/insights'];
	const authRoutes = ['/login', '/signup'];

	if (url.pathname === '/') {
		return redirect(303, '/games');
	}

	const session = await auth.api.getSession({
		headers: request.headers
	});

	locals.user = session?.user ?? null;

	if (session?.user && authRoutes.some((route) => url.pathname.startsWith(route))) {
		return redirect(303, '/games');
	}

	if (!session?.user && protectedRoutes.some((route) => url.pathname.startsWith(route))) {
		return redirect(303, '/login');
	}

	return await resolve(event);
};

export const handle = sequence(setSession, authGuard);
