import { Prisma } from '@prisma/client'
import { Request, Response } from 'express'
import ExemploService from '@services/ExemploService'
class ExemploController {
	async list(request: Request, response: Response) {
		try {
			const result = await ExemploService.list()
			response.status(200).json(result)
		} catch (error) {
			if (error instanceof Prisma.PrismaClientKnownRequestError) {
				response
					.status(400)
					.json({ errorCode: error.code, message: error.message })
			} else response.status(400).json(error)
		}
	}

	async find(request: Request, response: Response) {
		try {
			const { exampleId } = request.params

			const result = await ExemploService.find(Number(exampleId))
			response.status(200).json(result)
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

	async create(request: Request, response: Response) {
		try {
			const { nome } = request.body

			const result = await ExemploService.create(nome)
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
			const result = await ExemploService.update(Number(id), String(nome))
			response.status(200).json(result)
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

	async delete(request: Request, response: Response) {
		try {
			const { id } = request.params
			const result = await ExemploService.delete(Number(id))
			response.status(200).json(result)
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
