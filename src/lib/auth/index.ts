import { prismaAdapter } from 'better-auth/adapters/prisma';
import { betterAuth } from 'better-auth';
import { db } from '@/prisma';

export const auth = betterAuth({
	database: prismaAdapter(db.postgres, {
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
