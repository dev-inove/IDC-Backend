import { Router } from 'express'
import ExemploController from '@modules/Exemplo/controllers/ExemploController'
const routes = Router()

/*
    request ===> 
*/

routes.get(
	'/',
	(req, res, next) => {
		return next()
	},
	ExemploController.index,
)

routes.get(
	'/:exampleId',
	(req, res, next) => {
		return next()
	},
	ExemploController.show,
)

routes.post(
	'/',
	(req, res, next) => {
		return next()
	},
	ExemploController.store,
)

routes.patch(
	'/:id',
	(req, res, next) => {
		return next()
	},
	ExemploController.update,
)

routes.delete('/:id', ExemploController.destroy)

export default routes
