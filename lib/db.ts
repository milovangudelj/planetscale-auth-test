import { PrismaClient } from "@prisma/client";

declare global {
	// allow global `var` declarations
	// eslint-disable-next-line no-var
	var prisma: PrismaClient | undefined;
}

export const prisma =
	global.prisma ||
	new PrismaClient({
		datasources: {
			db: {
				url: process.env.DATABASE_PROXY_URL,
			},
		},
		log: ["query"],
	});

if (process.env.NODE_ENV !== "production") global.prisma = prisma;
