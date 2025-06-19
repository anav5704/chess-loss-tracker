import { BETTER_AUTH_URL } from '$env/static/private';
import { createAuthClient } from 'better-auth/svelte';

export const { signIn, signUp, signOut, useSession } = createAuthClient({
	baseURL: BETTER_AUTH_URL
});
