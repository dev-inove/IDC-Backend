import { Request, Response } from 'express'
import { UserServices } from '@services/UserServices'
import { GeneralError, PrismaError } from '@interfaces/IErrors'

const userServices = new UserServices()

export class UserControllers {
	async list(request: Request, response: Response) {
		const result = await userServices.list()

		if (result instanceof GeneralError || result instanceof PrismaError)
			return response.status(400).json({ erro: result })

		return response.status(200).json(result)
	}

	async findById(request: Request<{ id: string }>, response: Response) {
		const { id } = request.params
		const result = await userServices.findById(id)

		if (result instanceof GeneralError || result instanceof PrismaError)
			return response.status(400).json({ erro: result })

		return response.status(200).json(result)
	}

	async findByEmail(request: Request<{ email: string }>, response: Response) {
		const { email } = request.params
		const result = await userServices.findByEmail(email)

		if (result instanceof GeneralError || result instanceof PrismaError)
			return response.status(400).json({ erro: result })

		return response.status(200).json(result)
	}

	async create(
		request: Request<
			unknown,
			unknown,
			{ name: string; email: string; password: string; role: string }
		>,
		response: Response,
	) {
		const { body } = request
		const result = await userServices.create(body)

		if (result instanceof GeneralError || result instanceof PrismaError)
			return response.status(400).json({ erro: result })

		return response.status(201).json(result)
	}

	async update(
		request: Request<
			{ id: string },
			unknown,
			{
				name: string | undefined
				email: string | undefined
				password: string | undefined
				role: string | undefined
			}
		>,
		response: Response,
	) {
		const { body } = request
		const { id } = request.params
		const result = await userServices.update(id, body)

		if (result instanceof GeneralError || result instanceof PrismaError)
			return response.status(400).json({ erro: result })

		return response.status(200).json(result)
	}

	async delete(request: Request<{ id: string }>, response: Response) {
		const { id } = request.params
		const result = await userServices.delete(id)

		if (result instanceof GeneralError || result instanceof PrismaError)
			return response.status(400).json({ erro: result })

		return response.status(200).json(result)
	}
}
