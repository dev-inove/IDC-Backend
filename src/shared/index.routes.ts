import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => {
    return response.json({ msg: 'testando' });
})

export default routes;