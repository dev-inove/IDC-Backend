import { Prisma } from "@prisma/client";
import { UserRepositories } from "@repositories/UserRepositories";

const userRepositories = new UserRepositories();

class UserService {
  async delete(id: string) {
    try {
      const user = await userRepositories.FindById(id);
      if (user === null) {
        throw new Error("Usuário não encontrado");
      }
      return await userRepositories.Delete(id);
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        throw new Error("Erro no Prisma: " + error.message);
      } else if (error instanceof Error) {
        throw new Error("Erro geral: " + error.message);
      } else {
        throw new Error("Erro indefinido | Service.delete");
      }
    }
  }

  async update(id: string, body: { nome: string }) {
    try {
      const user = await userRepositories.FindById(id);
      if (user === null) {
        throw new Error("Usuário não encontrado");
      }
      return await userRepositories.Update(id, body);
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        throw new Error("Erro no Prisma: " + error.message);
      } else if (error instanceof Error) {
        throw new Error("Erro geral: " + error.message);
      } else {
        throw new Error("Erro indefinido | Service.update");
      }
    }
  }

  async create(body: {nome: string, email: string, senha: string, tipodeAcesso: string}) {
    try {
      return await userRepositories.Create(body);
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        throw new Error("Erro no Prisma: " + error.message);
      } else if (error instanceof Error) {
        throw new Error("Erro geral: " + error.message);
      } else {
        throw new Error("Erro indefinido | Service.create");
      }
    }
  }

  async list() {
    try {
      return await userRepositories.List();
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        throw new Error("Erro no Prisma: " + error.message);
      } else if (error instanceof Error) {
        throw new Error("Erro geral: " + error.message);
      } else {
        throw new Error("Erro indefinido | Service.list");
      }
    }
  }

  async findByEmail(email: string) {
    try {
      const user = await userRepositories.FindByEmail(email);
      if (user === null) {
        throw new Error("Usuário não encontrado");
      }
      return user
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        throw new Error("Erro no Prisma: " + error.message);
      } else if (error instanceof Error) {
        throw new Error("Erro geral: " + error.message);
      } else {
        throw new Error("Erro indefinido | Service.findByEmail");
      }
    }
  }

  async findById(id: string) {
    try {
      const user = await userRepositories.FindById(id);
      if (user === null) {
        throw new Error("Usuário não encontrado");
      }
      return user
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        throw new Error("Erro no Prisma: " + error.message);
      } else if (error instanceof Error) {
        throw new Error("Erro geral: " + error.message);
      } else {
        throw new Error("Erro indefinido | Service.findByEmail");
      }
    }
  }
}

export default new UserService();
