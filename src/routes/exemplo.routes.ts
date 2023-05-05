import { Router } from 'express'
import ExemploController from '@controllers/ExemploController'
import ExemploValidations from '@middlewares/ExemploValidations'
const routes = Router()

/*
    request ===> 
*/

routes.get('/', ExemploValidations.list, ExemploController.list)

routes.get('/:exampleId', ExemploValidations.find, ExemploController.find)

routes.post('/', ExemploValidations.create, ExemploController.create)

routes.patch('/:id', ExemploValidations.update, ExemploController.update)

routes.delete('/:id', ExemploValidations.delete, ExemploController.delete)

export default routes
