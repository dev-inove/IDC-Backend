import { Prisma } from '@prisma/client'

interface Erro {
	name: string
	message: string
}

export class PrismaError implements Erro {
	name: string
	message: string
	constructor(prismaErrorObject: Prisma.PrismaClientKnownRequestError) {
		this.name = prismaErrorObject.code
		this.message = prismaErrorObject.message
	}
}

export class GeneralError implements Erro {
	name: string
	message: string
	constructor(generalErrorObject: Error) {
		this.name = generalErrorObject.name
		this.message = generalErrorObject.message
	}
}
