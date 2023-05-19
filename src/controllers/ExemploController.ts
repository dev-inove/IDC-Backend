import { Request, Response } from 'express'
import ExemploService from '@services/ExemploService'
import { ErroGeral, ErroPrisma } from '@repositories/ErrorInterfaces'

export class ExemploController {
	async list(request: Request, response: Response) {
		const result = await ExemploService.list()

		if (result instanceof ErroGeral || result instanceof ErroPrisma)
			return response.status(400).json({ erro: result })

		response.status(200).json(result)
	}

	async find(request: Request<{ id: string }>, response: Response) {
		const { id } = request.params
		const result = await ExemploService.find(id)

		if (result instanceof ErroGeral || result instanceof ErroPrisma)
			return response.status(400).json({ erro: result })

		response.status(200).json(result)
	}

	async create(
		request: Request<unknown, unknown, { nome: string }>,
		response: Response,
	) {
		const { nome } = request.body
		const result = await ExemploService.create({ nome })

		if (result instanceof ErroGeral || result instanceof ErroPrisma)
			return response.status(400).json({ erro: result })

		response.status(201).json(result)
	}

	async update(
		request: Request<{ id: string }, unknown, { nome: string }>,
		response: Response,
	) {
		const { nome } = request.body
		const { id } = request.params
		const result = await ExemploService.update(id, { nome })

		if (result instanceof ErroGeral || result instanceof ErroPrisma)
			return response.status(400).json({ erro: result })

		response.status(200).json(result)
	}

	async delete(request: Request<{ id: string }>, response: Response) {
		const { id } = request.params
		const result = await ExemploService.delete(id)

		if (result instanceof ErroGeral || result instanceof ErroPrisma)
			return response.status(400).json({ erro: result })

		response.status(200).json(result)
	}
}
