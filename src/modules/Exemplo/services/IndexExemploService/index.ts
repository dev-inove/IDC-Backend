import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// eslint-disable-next-line @typescript-eslint/ban-types
export const IndexExemploService = async () => {
	return await prisma.exemplo.findMany()
}
