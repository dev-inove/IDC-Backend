import { IUser } from '@interfaces/IUser'
import { Request, Response } from 'express'

export class UserMiddlewares {
	findById(req: Request, res: Response, next: any) {
		const { id } = req.params
		if (id === undefined || id === null)
			return res.status(400).json({ erro: 'O Parâmetro ID da rota é nulo' })
		else return next()
	}

	findByEmail(req: Request, res: Response, next: any) {
		const { email } = req.params
		if (email === undefined || email === null)
			return res.status(400).json({ erro: 'O Parâmetro Email da rota é nulo' })
		else return next()
	}

	list(req: Request, res: Response, next: any) {
		return next()
	}

	create(req: Request, res: Response, next: any) {
		return next()
	}

	update(req: Request, res: Response, next: any) {
		return next()
	}

	delete(req: Request, res: Response, next: any) {
		return next()
	}
}
