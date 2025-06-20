import { inferAdditionalFields } from 'better-auth/client/plugins';
import { PUBLIC_BETTER_AUTH_URL } from '$env/static/public';
import { createAuthClient } from 'better-auth/svelte';
import type { auth } from '@/lib/auth';

export const { signIn, signUp, signOut, getSession } = createAuthClient({
	baseURL: PUBLIC_BETTER_AUTH_URL,
	plugins: [inferAdditionalFields<typeof auth>()]
});
