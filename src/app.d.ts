import type { User } from 'better-auth';

declare global {
	namespace App {
		interface Locals {
			user: User | null;
		}
	}
}

export {};
