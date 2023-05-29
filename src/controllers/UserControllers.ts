import { Request, Response } from 'express'
import UserServices from '../services/UserServices'

class UserControllers {
	public async list(req: Request, res: Response): Promise<void> {
		try {
			const users = await UserServices.list()
			res.json(users)
		} catch (error) {
			res.status(500).json({ error: 'Erro ao buscar usuários' })
		}
	}

	public async find(req: Request, res: Response): Promise<void> {
		const { id } = req.params
		try {
			const user = await UserServices.find(id)
			res.json(user)
		} catch (error) {
			res.status(500).json({ error: 'Erro ao buscar usuário' })
		}
	}

	public async create(req: Request, res: Response): Promise<void> {
		const userData = req.body
		try {
			await UserServices.create(userData)
			res.json({ message: 'Usuário criado com sucesso' })
		} catch (error) {
			res.status(500).json({ error: 'Erro ao criar usuário' })
		}
	}

	public async update(req: Request, res: Response): Promise<void> {
		const { id } = req.params
		const userData = req.body
		try {
			await UserServices.update(id, userData)
			res.json({ message: 'Usuário atualizado com sucesso' })
		} catch (error) {
			res.status(500).json({ error: 'Erro ao atualizar usuário' })
		}
	}

	public async delete(req: Request, res: Response): Promise<void> {
		const { id } = req.params
		try {
			await UserServices.delete(id)
			res.json({ message: 'Usuário excluído com sucesso' })
		} catch (error) {
			res.status(500).json({ error: 'Erro ao excluir usuário' })
		}
	}
}

export default new UserControllers()
