import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const StoreExemploService = async (nome: string) => {
	return await prisma.exemplo.create({
		data: {
			nome,
		},
	})
}
