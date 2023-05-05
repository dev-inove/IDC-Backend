import ExemploRepository from '@repositories/ExemploRepository'

class ExemploService {
	async delete(id: number) {
		return await ExemploRepository.delete(id)
	}

	async list() {
		return await ExemploRepository.list()
	}

	async find(body: any) {
		return await ExemploRepository.find(body)
	}

	async update(id: number, body: any) {
		return await ExemploRepository.update(id, body)
	}

	async create(body: any) {
		return await ExemploRepository.create(body)
	}
}

export default new ExemploService()
