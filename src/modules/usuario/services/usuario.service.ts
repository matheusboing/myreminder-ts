import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist/common/typeorm.decorators';
import { UsuarioDto, UsuarioEditDto } from '@app/modules/usuario/dtos/usuario.dto';
import { Usuario } from '@app/modules/usuario/models/usuario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  async getByEmail(email: string) {
    const usuario = await this.usuarioRepository.findOne({
      where: { email: email },
    });
    
    return usuario;
  }

  async create(usuarioDto: UsuarioDto) {
    if (await this.getByEmail(usuarioDto.email)) {
      return null;
    }

    return await this.usuarioRepository.save(usuarioDto);
  }

  async update(usuario: UsuarioEditDto) {
    return await this.usuarioRepository.save(usuario);
  }

  async delete(id: string) {
    const usuario = await this.usuarioRepository.findOne(id)

    if (!usuario) {
      return null;
    }

    return await this.usuarioRepository.softRemove(usuario);
  }

  async checkPassword(id: string, senha: string): Promise<boolean> {
      const usuario = await this.usuarioRepository.findOne(id, {select: ["senha"]});

      return usuario.senha == senha
  }
}
