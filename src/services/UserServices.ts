import { Prisma } from '@prisma/client'
import { UserRepositories } from '@repositories/UserRepositories'
import { GeneralError, PrismaError } from 'interfaces/IErrors'

const userRepositories = new UserRepositories()

class UserService {
	async Delete(id: string) {
		try {
			const user = await userRepositories.FindById(id)
			if (user === null) {
				throw new Error('Usuário não encontrado')
			}
			return await userRepositories.Delete(id)
		} catch (error) {
			if (error instanceof Prisma.PrismaClientKnownRequestError) {
				return new PrismaError(error)
			} else if (error instanceof Error) {
				return new GeneralError(error)
			} else
				return new GeneralError(
					new Error('Erro indefinido  | ExemploService.delete'),
				)
		}
	}

	async Update(id: string, body: { nome: string }) {
		try {
			const user = await userRepositories.FindById(id)
			if (user === null) {
				throw new Error('Usuário não encontrado')
			}
			return await userRepositories.Update(id, body)
		} catch (error) {
			if (error instanceof Prisma.PrismaClientKnownRequestError) {
				return new PrismaError(error)
			} else if (error instanceof Error) {
				return new GeneralError(error)
			} else
				return new GeneralError(
					new Error('Erro indefinido  | ExemploService.delete'),
				)
		}
	}

	async Create(body: {
		nome: string
		email: string
		senha: string
		tipodeAcesso: string
	}) {
		try {
			return await userRepositories.Create(body)
		} catch (error) {
			if (error instanceof Prisma.PrismaClientKnownRequestError) {
				return new PrismaError(error)
			} else if (error instanceof Error) {
				return new GeneralError(error)
			} else
				return new GeneralError(
					new Error('Erro indefinido  | ExemploService.delete'),
				)
		}
	}

	async List() {
		try {
			return await userRepositories.List()
		} catch (error) {
			if (error instanceof Prisma.PrismaClientKnownRequestError) {
				return new PrismaError(error)
			} else if (error instanceof Error) {
				return new GeneralError(error)
			} else
				return new GeneralError(
					new Error('Erro indefinido  | ExemploService.delete'),
				)
		}
	}

	async FindByEmail(email: string) {
		try {
			const user = await userRepositories.FindByEmail(email)
			if (user === null) {
				throw new Error('Usuário não encontrado')
			}
			return user
		} catch (error) {
			if (error instanceof Prisma.PrismaClientKnownRequestError) {
				return new PrismaError(error)
			} else if (error instanceof Error) {
				return new GeneralError(error)
			} else
				return new GeneralError(
					new Error('Erro indefinido  | ExemploService.delete'),
				)
		}
	}

	async FindById(id: string) {
		try {
			const user = await userRepositories.FindById(id)
			if (user === null) {
				throw new Error('Usuário não encontrado')
			}
			return user
		} catch (error) {
			if (error instanceof Prisma.PrismaClientKnownRequestError) {
				return new PrismaError(error)
			} else if (error instanceof Error) {
				return new GeneralError(error)
			} else
				return new GeneralError(
					new Error('Erro indefinido  | ExemploService.delete'),
				)
		}
	}
}

export default new UserService()
