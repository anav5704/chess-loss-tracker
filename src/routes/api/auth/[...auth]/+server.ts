import type { RequestHandler } from './$types';
import { auth } from '@/lib/auth';

export const GET: RequestHandler = async (event) => {
	return auth.handler(event.request);
};

export const POST: RequestHandler = async (event) => {
	return auth.handler(event.request);
};
