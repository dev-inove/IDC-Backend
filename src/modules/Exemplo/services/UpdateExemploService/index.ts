import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const UpdateExemploService = async (id: number, nome: string) => {
	return await prisma.exemplo.update({
		where: {
			id,
		},
		data: {
			nome,
		},
	})
}
