import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist/common/typeorm.decorators';
import { UsuarioDto, UsuarioEditDto } from '@usuario/dtos/user.dto';
import { Usuario } from '@usuario/models/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private readonly userRepository: Repository<Usuario>,
  ) {}

  async get(id: string) {
    return await this.userRepository.findOne(id);
  }

  async getByEmail(email: string) {
    const usuario = await this.userRepository.findOne({
      where: { email: email },
    });
    
    return usuario;
  }

  async create(usuarioDto: UsuarioDto) {
    if (await this.getByEmail(usuarioDto.email)) {
      console.log('Entrou no if');
      return null;
    }

    return await this.userRepository.save(usuarioDto);
  }

  async update(usuario: UsuarioEditDto) {
    if (!(await this.get(usuario.id))) {
      return null;
    }

    return await this.userRepository.save(usuario);
  }

  async delete(id: string) {
    const usuario = await this.get(id);

    if (!usuario) {
      return null;
    }

    return await this.userRepository.softRemove(usuario);
  }
}
