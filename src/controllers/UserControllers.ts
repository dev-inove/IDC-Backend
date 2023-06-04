import { Request, Response } from 'express'
import UserServices from '@services/UserServices'
import { ErroGeral, ErroPrisma } from '@repositories/ErrorInterfaces'

export class UserController {
	async list(request: Request, response: Response) {
		const result = await UserServices.list()

		if (result instanceof ErroGeral || result instanceof ErroPrisma)
			return response.status(400).json({ erro: result })

		response.status(200).json(result)
	}

	async find(request: Request<{ id: string }>, response: Response) {
		const { id } = request.params
		const result = await UserServices.find(id)

		if (result instanceof ErroGeral || result instanceof ErroPrisma)
			return response.status(400).json({ erro: result })

		response.status(200).json(result)
	}

	async create(
		request: Request<any, any, { nome: string }>,
		response: Response,
	) {
		const { nome } = request.body
		const result = await UserServices.create({ nome })

		if (result instanceof ErroGeral || result instanceof ErroPrisma)
			return response.status(400).json({ erro: result })

		response.status(201).json(result)
	}

	async update(
		request: Request<{ id: string }, any, { nome: string }>,
		response: Response,
	) {
		const { nome } = request.body
		const { id } = request.params
		const result = await UserServices.update(id, { nome })

		if (result instanceof ErroGeral || result instanceof ErroPrisma)
			return response.status(400).json({ erro: result })

		response.status(200).json(result)
	}

	async delete(request: Request<{ id: string }>, response: Response) {
		const { id } = request.params
		const result = await UserServices.delete(id)

		if (result instanceof ErroGeral || result instanceof ErroPrisma)
			return response.status(400).json({ erro: result })

		response.status(200).json(result)
	}
}

export default new UserController()