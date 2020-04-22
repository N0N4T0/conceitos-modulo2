import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';

import User from '../models/User';

interface Request {
  email: string;
  password: string;
}

interface Response {
  user: User;
}

class AuthenticateUserService {
  public async execute({ email, password }: Request): Promise<Response> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({ where: { email } });

    if (!user) {
      throw new Error('Inconrrect email/password combination.');
    }

    // user.password - Senha criptografada dentro do banco
    // password - senha que tentou fazer login, não criptografada

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new Error('Inconrrect email/password combination.');
    }

    // Usuário autenticado

    return {
      user,
    };
  }
}

export default AuthenticateUserService;