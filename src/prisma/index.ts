import { PrismaClient as PostgresClient } from '@/prisma/generated/postgres';
import { PrismaClient as SqliteClient } from '@/prisma/generated/sqlite';

export const db = {
	postgres: new PostgresClient(),
	sqlite: new SqliteClient()
};
