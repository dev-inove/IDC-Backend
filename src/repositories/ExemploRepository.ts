import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

class ExemploRepository {
	async delete(id: number) {
		return await prisma.exemplo.delete({
			where: {
				id: id,
			},
		})
	}

	async list() {
		return await prisma.exemplo.findMany()
	}

	async create(nome: string) {
		return await prisma.exemplo.create({
			data: {
				nome,
			},
		})
	}

	async find(id: number) {
		return await prisma.exemplo.findUnique({
			where: {
				id,
			},
		})
	}

	async update(id: number, nome: string) {
		return await prisma.exemplo.update({
			where: {
				id,
			},
			data: {
				nome,
			},
		})
	}
}

export default new ExemploRepository()
