import { Prisma } from '@prisma/client'
import { Request, Response } from 'express'
import { IndexExemploService } from '@modules/Exemplo/services/IndexExemploService'
import { ShowExemploService } from '@modules/Exemplo/services/ShowExemploService'
import { StoreExemploService } from '@modules/Exemplo/services/StoreExemploService'
import { UpdateExemploService } from '@modules/Exemplo/services/UpdateExemploService'
import { DestroyExemploService } from '@modules/Exemplo/services/DestroyExemploService'

class ExemploController {
	async index(request: Request, response: Response) {
		try {
			const result = await IndexExemploService()
			response.status(201).json(result)
		} catch (error) {
			if (error instanceof Prisma.PrismaClientKnownRequestError) {
				response
					.status(400)
					.json({ errorCode: error.code, message: error.message })
			} else response.status(400).json(error)
		}
	}

	async show(request: Request, response: Response) {
		try {
			const { exampleId } = request.params

			const result = await ShowExemploService(Number(exampleId))
			response.status(201).json(result)
		} catch (error) {
			if (error instanceof Prisma.PrismaClientKnownRequestError) {
				response
					.status(400)
					.json({ errorCode: error.code, message: error.message.split('\n') })
			} else if (error instanceof Error)
				response
					.status(400)
					.json({ message: error.message, cause: error.cause })
			else response.status(400).json(error)
		}
	}

	async store(request: Request, response: Response) {
		try {
			const { nome } = request.body

			const result = await StoreExemploService(nome)
			response.status(201).json(result)
		} catch (error) {
			if (error instanceof Prisma.PrismaClientKnownRequestError) {
				response
					.status(400)
					.json({ errorCode: error.code, message: error.message.split('\n') })
			} else if (error instanceof Error)
				response
					.status(400)
					.json({ message: error.message, cause: error.cause })
			else response.status(400).json(error)
		}
	}

	async update(request: Request, response: Response) {
		try {
			const { nome } = request.body
			const { id } = request.params
			const result = await UpdateExemploService(Number(id), String(nome))
			response.status(201).json(result)
		} catch (error) {
			if (error instanceof Prisma.PrismaClientKnownRequestError) {
				response
					.status(400)
					.json({ errorCode: error.code, message: error.message.split('\n') })
			} else if (error instanceof Error)
				response
					.status(400)
					.json({ message: error.message, cause: error.cause })
			else return response.status(400).json(error)
		}
	}

	async destroy(request: Request, response: Response) {
		try {
			const { id } = request.params
			const result = await DestroyExemploService(Number(id))
			response.status(201).json(result)
		} catch (error) {
			if (error instanceof Prisma.PrismaClientKnownRequestError) {
				response
					.status(400)
					.json({ errorCode: error.code, message: error.message.split('\n') })
			} else if (error instanceof Error)
				response
					.status(400)
					.json({ message: error.message, cause: error.cause })
			else return response.status(400).json(error)
		}
	}
}

export default new ExemploController()
