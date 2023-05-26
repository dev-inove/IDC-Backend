import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

class UserRepository {
	async Delete(id: string) {
		return await prisma.user.delete({
			where: {
				id: Number(id),
			},
		})
	}

	async Update(
		id: string,
		body: { name: string; email: string; password: string; role: string },
	) {
		return await prisma.user.update({
			where: {
				id: Number(id),
			},
			data: {
				name: body.name,
				email: body.email,
				password: body.password,
				role: body.role,
			},
		})
	}

	async Create(data: {
		name: string
		email: string
		password: string
		role: string
	}) {
		return await prisma.user.create({
			data: {
				name: data.name,
				email: data.email,
				password: data.password,
				role: data.role,
			},
		})
	}

	async List() {
		return await prisma.user.findMany()
	}

	async FindByEmail(email: string) {
		return await prisma.user.findUnique({
			where: {
				email: String(email),
			},
		})
	}

	async FindById(id: string) {
		return await prisma.user.findUnique({
			where: {
				id: Number(id),
			},
		})
	}
}

export default new UserRepository()
