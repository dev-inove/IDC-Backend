import { Router } from 'express'
import exemploRoutes from '@modules/Exemplo/routes/exemplo.routes'

const routes = Router()

routes.get('/', (request, response) => {
	try {
		return response.json({ msg: 'testando' })
	} catch (error) {
		let message
		if (error instanceof Error) message = error.message
		else message = String(error)
		return response.status(400).json({ error: message })
	}
})

routes.use('/exemplo', exemploRoutes)

export default routes
