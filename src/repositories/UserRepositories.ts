import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export class UserRepositories {
	async delete(id: string) {
		return await prisma.user.delete({
			where: {
				id,
			},
		})
	}

	async update(
		id: string,
		body: {
			name: string | undefined
			email: string | undefined
			password: string | undefined
			role: string | undefined
		},
	) {
		return await prisma.user.update({
			where: {
				id,
			},
			data: body,
		})
	}

	async create(body: {
		name: string
		email: string
		password: string
		role: string
	}) {
		return await prisma.user.create({
			data: body,
		})
	}

	async list() {
		return await prisma.user.findMany()
	}

	async findByEmail(email: string) {
		return await prisma.user.findUnique({
			where: {
				email,
			},
		})
	}

	async findById(id: string) {
		return await prisma.user.findUnique({
			where: {
				id,
			},
		})
	}
}
