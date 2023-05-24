import { Request, Response } from 'express'

export class ExemploValidations {
	async create(
		req: Request<any, any, { nome: string }>,
		res: Response,
		next: any,
	) {
		const { nome } = req.body
		if (!nome) return res.status(400).json({ error: 'Nome não informado' })
		return next()
	}

	async update(
		req: Request<{ id: string }, any, { nome: string }>,
		res: Response,
		next: any,
	) {
		const { id } = req.params
		const { nome } = req.body

		if (!id) return res.status(400).json({ error: 'Id não informado' })
		if (!nome) return res.status(400).json({ error: 'Nome não informado' })

		return next()
	}

	async delete(req: Request<{ id: string }>, res: Response, next: any) {
		const { id } = req.params
		if (!id) return res.status(400).json({ error: 'Id não informado' })
		return next()
	}

	async list(req: Request, res: Response, next: any) {
		return next()
	}

	async find(req: Request<{ id: string }>, res: Response, next: any) {
		if (!req.params.id)
			return res.status(400).json({ error: 'Id não informado' })
		return next()
	}
}
