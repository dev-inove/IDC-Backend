import { Request, Response } from 'express'

export class ExemploValidations {
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

	async delete(req: Request, res: Response, next: any) {
		const { id } = req.params
		if (!id) return res.status(400).json({ error: 'Id não informado' })
		return next()
	}

	async list(req: Request, res: Response, next: any) {
		return next()
	}

	async find(req: Request, res: Response, next: any) {
		const { exampleId } = req.params
		if (!exampleId) return res.status(400).json({ error: 'Id não informado' })
		return next()
	}
}
