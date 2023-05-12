import 'module-alias/register'
import '../config/moduleAliasConfig'

import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from 'cors'
import routes from '@shared/app.routes'
import bodyParser from 'body-parser'

class App {
	public server: express.Application

	public constructor() {
		this.server = express()
		this.middlewares()

		this.routes()
	}

	routes() {
		this.server.use(routes)
		return 100
	}

	private middlewares(): void {
		this.server.use(express.json())
		this.server.use(cors())
		this.server.use(bodyParser.json())
	}
}

export default new App().server
