import { PrismaClient } from '@prisma/client'

const Prisma = new PrismaClient()

export const ShowExemploService = async (id: number) => {
	return await Prisma.exemplo.findUnique({
		where: {
			id,
		},
	})
}
