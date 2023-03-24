import { Router } from "express";
import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();
const routes = Router();

routes.get('/', async (req, res) => {
    try {
        const result = await prisma.exemplo.findMany();
        res.status(201).json(result);
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            return res.status(400).json({ errorCode: error.code, message : error.message });
        }
        else return res.status(400).json(error)
    }
});

routes.get('/:exampleId', async (req, res) => {
    try {
        const { exampleId } = req.params;
        const result = await prisma.exemplo.findUnique({
            where: {
                id: Number(exampleId)
            }
        });
        res.status(201).json(result);
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            return res.status(400).json({ errorCode: error.code, message : error.message });
        }
        else return res.status(400).json( error)
    }

});

routes.post('/', async (req, res) => {
    try {
        const { nome, preco, peso } = req.body;
        const result = await prisma.exemplo.create({
            data: {
                nome,
                preco,
                peso
            }
        })
        res.status(201).json(result);
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            return res.status(400).json({ errorCode: error.code, message : error.message });
        }
        else return res.status(400).json( error)
    }
}
)

routes.patch('/:id', async (req, res) => {
    try {
        const { nome, preco, peso } = req.body;
        const { id } = req.params;
        const result = await prisma.exemplo.update({
            where: {
                id: Number(id)
            },
            data: {
                nome,
                preco,
                peso
            }
        })
        res.status(201).json(result);
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            return res.status(400).json({ errorCode: error.code, message : error.message });
        }
        else return res.status(400).json( error)
    }
}
)

routes.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await prisma.exemplo.delete({
            where: {
                id: Number(id)
            }
        })
        res.status(201).json(result);
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            return res.status(400).json({ errorCode: error.code, message : error.message });
        }
        else return res.status(400).json( error)
    }
})

export default routes