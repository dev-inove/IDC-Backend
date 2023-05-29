import { Request, Response } from "express";
const express = require('express');
const UserRoutes = express.router();

UserRoutes.get('/list', () => {
    return UserController.list();
})

UserRoutes.get('/find/:id', (req : Request) => {
    return UserController.find(req.params.id);
})

UserRoutes.post('/create', (req : Request, res : Response) => {
    return UserController.create(req.body , res);
})

UserRoutes.path('/update/:id', (req : Request, res : Response) => {
    return UserController.update(req, res)
})

UserRoutes.delete('/delete/:id', (req : Request, res : Response) => {
    return UserController.delete(req.params.id, res)
})

export = UserRoutes

