import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const DestroyExemploService = async (id: number) => {
	return await prisma.exemplo.delete({
		where: {
			id: id,
		},
	})
}
