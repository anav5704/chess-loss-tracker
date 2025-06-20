import { prismaAdapter } from 'better-auth/adapters/prisma';
import { PrismaClient } from '@prisma/client';
import { betterAuth } from 'better-auth';

const prisma = new PrismaClient();

export const auth = betterAuth({
	database: prismaAdapter(prisma, {
		provider: 'postgresql'
	}),
	user: {
		additionalFields: {
			// Chess.com username
			ccUsername: {
				type: 'string',
				nullable: true
			},

			// Lichess.org username
			loUsername: {
				type: 'string',
				nullable: true
			}
		}
	},
	emailAndPassword: {
		enabled: true
	},
	session: {
		expiresIn: 60 * 60 * 24 * 7,
		updateAge: 60 * 60 * 24
	}
});

type Session = typeof auth.$Infer.Session;
