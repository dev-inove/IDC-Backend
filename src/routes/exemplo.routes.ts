import { Router } from 'express'
import { ExemploController } from '@controllers/ExemploController'
import { ExemploValidations } from '@middlewares/ExemploValidations'

const ExemploRoutes = Router()
const exemploController = new ExemploController()
const exemploValidations = new ExemploValidations()
/*
    request ===> 
*/

ExemploRoutes.get('/', exemploValidations.list, exemploController.list)

ExemploRoutes.get('/:id', exemploValidations.find, exemploController.find)

ExemploRoutes.post('/', exemploValidations.create, exemploController.create)

ExemploRoutes.patch('/:id', exemploValidations.update, exemploController.update)

ExemploRoutes.delete(
	'/:id',
	exemploValidations.delete,
	exemploController.delete,
)

export { ExemploRoutes }
