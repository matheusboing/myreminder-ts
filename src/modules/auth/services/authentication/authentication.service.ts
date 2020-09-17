import { UsuarioService } from '@app/modules/usuario/services/usuario.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthenticationService {
  constructor(private readonly usuarioService: UsuarioService) {}

  async login(email: string, senha: string) {
    const usuario = await this.usuarioService.getByEmail(email);

    if (!usuario) {
      return null;
    }

    if (!(await this.usuarioService.checkPassword(usuario.id, senha))) {
      return null;
    }

    return usuario;
  }
}
