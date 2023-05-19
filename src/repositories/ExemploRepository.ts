import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

class ExemploRepository {
	async delete(id: string) {
		return await prisma.exemplo.delete({
			where: {
				id,
			},
		})
	}

	async list() {
		return await prisma.exemplo.findMany()
	}

	async create(data: { nome: string }) {
		return await prisma.exemplo.create({
			data,
		})
	}

	async find(id: string) {
		return await prisma.exemplo.findUnique({
			where: {
				id,
			},
		})
	}

	async update(id: string, data: { nome: string }) {
		return await prisma.exemplo.update({
			where: {
				id,
			},
			data,
		})
	}
}

export default new ExemploRepository()
