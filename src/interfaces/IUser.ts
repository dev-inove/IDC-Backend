import { Request } from "express";

export interface IUser extends Request{
    id: number,
    email: string,
    nome: String,
    senha: String,
    tipoDeAcesso : String
}