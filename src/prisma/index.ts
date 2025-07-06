import { PrismaClient as PostgresClient } from '@prisma/postgres';
import { PrismaClient as SqliteClient } from '@prisma/sqlite';

export const db = {
	postgres: new PostgresClient(),
	sqlite: new SqliteClient()
};
