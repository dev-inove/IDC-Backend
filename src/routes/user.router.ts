import { Router } from 'express'
import { UserMiddlewares } from '@middlewares/UserMiddlewares'
import { UserControllers } from '@controllers/UserControllers'
import { ensureAuthenticated } from '@middlewares/ensureAuthenticated'

export const UserRoutes = Router()
const userControllers = new UserControllers()
const userMiddlewares = new UserMiddlewares()

UserRoutes.get('/list', userControllers.list)

UserRoutes.get(
	'/findById/:id',
	userMiddlewares.findById,
	userControllers.findById,
)

UserRoutes.get(
	'/findByEmail/:email',
	userMiddlewares.findByEmail,
	userControllers.findByEmail,
)

UserRoutes.post('/create', userMiddlewares.create, userControllers.create)

UserRoutes.patch('/update/:id', userMiddlewares.update, userControllers.update)

UserRoutes.delete('/delete/:id', userMiddlewares.delete, userControllers.delete)
