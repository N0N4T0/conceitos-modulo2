import { getRepository } from 'typeorm';
import path from 'path';
import fs from 'fs';
import User from '../models/User';

import AppError from '../errors/AppError';

import uploadConfig from '../config/upload';

interface Request {
  user_id: string;
  avatarFilename: string;
}

class UpdateUserAvatarService {
  public async execute({ user_id, avatarFilename }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne(user_id);

    if (!user) {
      throw new AppError(
        'Only authenticated users cant change avatar.',
        401,
      );
    }

    if (user.avatar) {
      // Deletar avatar anterior
      const userAvatarFilePath = path.join(
        uploadConfig.directory,
        user.avatar,
      );
      // stat() = traz o status do arquivo somente se ele existir
      const userAvatarFileExists = await fs.promises.stat(
        userAvatarFilePath,
      );

      if (userAvatarFileExists) {
        await fs.promises.unlink(userAvatarFilePath);
      }
    }

    // save() = funciona tanto para criar como para atualizar, nesse caso ta atualizando
    user.avatar = avatarFilename;

    await usersRepository.save(user);

    return user;
  }
}

export default UpdateUserAvatarService;
