import { Prisma } from '@prisma/client'
import { Request, Response } from 'express'
import findManyExemploService from '@modules/Exemplo/services/findManyExemploService'

class ExemploController {
	async index(request: Request, response: Response) {
		try {
			const result = await findManyExemploService()
			response.status(201).json(result)
		} catch (error) {
			if (error instanceof Prisma.PrismaClientKnownRequestError) {
				response
					.status(400)
					.json({ errorCode: error.code, message: error.message })
			} else response.status(400).json(error)
		}
	}
}

export default new ExemploController()
