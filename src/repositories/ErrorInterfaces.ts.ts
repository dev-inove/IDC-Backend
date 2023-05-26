/* eslint-disable prettier/prettier */
import { Prisma } from '@prisma/client'

export interface Erro {
	name: string
	message: string
}

export class ErroPrisma implements Erro {
	name: string
	message: string
	constructor(prismaErrorObject: Prisma.PrismaClientKnownRequestError) {
		this.name = prismaErrorObject.code
		this.message = prismaErrorObject.message
	}
}

export class ErroGeral implements Erro {
	name: string
	message: string
	constructor(generalErrorObject: Error) {
		this.name = generalErrorObject.name
		this.message = generalErrorObject.message
	}
}