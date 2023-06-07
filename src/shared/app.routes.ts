import { Router } from 'express'
import { UserRoutes } from '@routes/user.router'
const routes = Router()

routes.use('/user', UserRoutes)

routes.get('/', (request, response) => {
	try {
		return response.json({ msg: 'testando' })
	} catch (error) {
		const message = error instanceof Error ? error.message : String(error)
		return response.status(400).json({ error: message })
	}
})

export default routes
