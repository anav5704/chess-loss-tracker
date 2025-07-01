import type { User } from '@prisma/postgres';

declare global {
	namespace App {
		interface Locals {
			user: User | null;
		}
	}
}

export {};
