import { Prisma } from '@prisma/client'
import { UserRepositories } from '@repositories/UserRepositories'
import { GeneralError, PrismaError } from '@interfaces/IErrors'

const userRepositories = new UserRepositories()

export class UserServices {
	async delete(id: string) {
		try {
			const user = await userRepositories.findById(id)
			if (user === null) {
				throw new Error('Usuário não encontrado')
			}
			return await userRepositories.delete(id)
		} catch (error) {
			if (error instanceof Prisma.PrismaClientKnownRequestError) {
				return new PrismaError(error)
			} else if (error instanceof Error) {
				return new GeneralError(error)
			} else
				return new GeneralError(
					new Error('Erro indefinido  | UserService.delete'),
				)
		}
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
		try {
			if (id === undefined) {
				throw new Error(
					'Não é possível realizar a requisição de atualização sem um ID',
				)
			}
			return await userRepositories.update(id, body)
		} catch (error) {
			if (error instanceof Prisma.PrismaClientKnownRequestError) {
				return new PrismaError(error)
			} else if (error instanceof Error) {
				return new GeneralError(error)
			} else
				return new GeneralError(
					new Error('Erro indefinido  | UserService.update'),
				)
		}
	}

	async create(body: {
		name: string
		email: string
		password: string
		role: string
	}) {
		try {
			return await userRepositories.create(body)
		} catch (error) {
			if (error instanceof Prisma.PrismaClientKnownRequestError) {
				return new PrismaError(error)
			} else if (error instanceof Error) {
				return new GeneralError(error)
			} else
				return new GeneralError(
					new Error('Erro indefinido  | UserService.create'),
				)
		}
	}

	async list() {
		try {
			return await userRepositories.list()
		} catch (error) {
			if (error instanceof Prisma.PrismaClientKnownRequestError) {
				return new PrismaError(error)
			} else if (error instanceof Error) {
				return new GeneralError(error)
			} else
				return new GeneralError(
					new Error('Erro indefinido  | UserService.list'),
				)
		}
	}

	async findByEmail(email: string) {
		try {
			const user = await userRepositories.findByEmail(email)
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
					new Error('Erro indefinido  | UserService.findByEmail'),
				)
		}
	}

	async findById(id: string) {
		try {
			const user = await userRepositories.findById(id)
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
					new Error('Erro indefinido  | UserService.findById'),
				)
		}
	}
}
