import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// eslint-disable-next-line @typescript-eslint/ban-types
const findManyExemploService = async () => {
	return await prisma.exemplo.findMany()
}

export default findManyExemploService
