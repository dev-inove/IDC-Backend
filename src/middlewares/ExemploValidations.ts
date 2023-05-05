import { Request, Response } from 'express'

class ExemploValidations {
	async create(req: Request, res: Response, next: any) {
		const { nome } = req.body
		if (!nome) return res.status(400).json({ error: 'Nome não informado' })
		return next()
	}

	async update(req: Request, res: Response, next: any) {
		const { nome } = req.body
		if (!nome) return res.status(400).json({ error: 'Nome não informado' })
		return next()
	}
}

export default new ExemploValidations()
