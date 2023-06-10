import 'module-alias/register'
import '../config/moduleAliasConfig'

import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from 'cors'
import routes from '@shared/app.routes'
import bodyParser from 'body-parser'

class App {
	private server: express.Application

	constructor() {
		this.server = express()
		this.middlewares()
		this.routes()
	}

	private routes(): void {
		this.server.use(routes)
	}

	private middlewares(): void {
		this.server.use(express.json())
		this.server.use(cors())
		this.server.use(bodyParser.urlencoded())
	}

	public getServer(): express.Application {
		return this.server
	}
}

export default new App().getServer()
