import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export class UserRepositories {
	async Delete(id: string) {
		return await prisma.user.delete({
			where: {
				id,
			},
		})
	}

	async Update(
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

	async Create(data: {
		name: string
		email: string
		password: string
		role: string
	}) {
		return await prisma.user.create({
			data,
		})
	}

	async List() {
		return await prisma.user.findMany()
	}

	async FindByEmail(email: string) {
		return await prisma.user.findUnique({
			where: {
				email,
			},
		})
	}

	async FindById(id: string) {
		return await prisma.user.findUnique({
			where: {
				id,
			},
		})
	}
}
