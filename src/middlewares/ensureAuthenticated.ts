import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

interface IPlayload {
	sub: string
	roles: string
}

export async function ensureAuthenticated(
	request: Request,
	response: Response,
	next: NextFunction,
) {
	const authHeader = request.headers.authorization

	if (!authHeader) {
		throw new Error('JWT token is missing')
	}

	const [, token] = authHeader.split(' ')

	try {
		const { sub: user_id, roles } = verify(
			token,
			'ac81a9ff47be796b7f2e4ccad808e14',
		) as IPlayload

		request.user = {
			id: user_id,
			roles,
		}

		next()
	} catch {
		throw new Error('Invalid JWT token')
	}
}
