import { Prisma } from '@prisma/client'
import { ErroGeral, ErroPrisma } from '@repositories/ErrorInterfaces'
import ExemploRepository from '@repositories/ExemploRepository'

class ExemploService {
	async delete(id: string) {
		try {
			const exemplo = await ExemploRepository.find(id)
			if (exemplo === null) throw new Error('Exemplo não encontrado')
			return await ExemploRepository.delete(id)
		} catch (error) {
			if (error instanceof Prisma.PrismaClientKnownRequestError) {
				return new ErroPrisma(error)
			} else if (error instanceof Error) {
				return new ErroGeral(error)
			} else
				return new ErroGeral(
					new Error('Erro indefinido  | ExemploService.delete'),
				)
		}
	}

	async list() {
		try {
			return await ExemploRepository.list()
		} catch (error) {
			if (error instanceof Prisma.PrismaClientKnownRequestError) {
				return new ErroPrisma(error)
			} else if (error instanceof Error) {
				return new ErroGeral(error)
			} else
				return new ErroGeral(
					new Error('Erro indefinido  | ExemploService.list'),
				)
		}
	}

	async find(id: string) {
		try {
			const result = await ExemploRepository.find(id)
			if (result === null) {
				throw new Error('Exemplo não encontrado')
			}
			return result
		} catch (error) {
			if (error instanceof Prisma.PrismaClientKnownRequestError) {
				return new ErroPrisma(error)
			} else if (error instanceof Error) {
				return new ErroGeral(error)
			} else
				return new ErroGeral(
					new Error('Erro indefinido  | ExemploService.find'),
				)
		}
	}

	async update(id: string, body: { nome: string }) {
		try {
			const exemplo = await ExemploRepository.find(id)
			if (exemplo === null) throw new Error('Exemplo não encontrado')
			return await ExemploRepository.update(id, body)
		} catch (error) {
			if (error instanceof Prisma.PrismaClientKnownRequestError) {
				return new ErroPrisma(error)
			} else if (error instanceof Error) {
				return new ErroGeral(error)
			} else
				return new ErroGeral(
					new Error('Erro indefinido  | ExemploService.update'),
				)
		}
	}

	async create(body: { nome: string }) {
		try {
			return await ExemploRepository.create(body)
		} catch (error) {
			if (error instanceof Prisma.PrismaClientKnownRequestError) {
				return new ErroPrisma(error)
			} else if (error instanceof Error) {
				return new ErroGeral(error)
			} else
				return new ErroGeral(
					new Error('Erro indefinido  | ExemploService.create'),
				)
		}
	}
}

export default new ExemploService()
