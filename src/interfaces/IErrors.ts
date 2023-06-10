interface Erro {
	name: string
	message: string
}

export class PrismaError implements Erro {
	name: string
	message: string

	constructor(errorName: string, errorMessage: string) {
		this.name = errorName
		this.message = errorMessage
	}
}

export class GeneralError implements Erro {
	name: string
	message: string

	constructor(errorName: string, errorMessage: string) {
		this.name = errorName
		this.message = errorMessage
	}
}
