import { Usuario } from '@app/modules/usuario/models/usuario.entity';
import { UsuarioService } from '@app/modules/usuario/services/usuario.service';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt/dist/jwt.service';

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly usuarioService: UsuarioService,
    private readonly jwtService: JwtService,
  ) {}

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

  generateJwt(usuario: Usuario) {
    const payload = { sub: usuario.id, nome: usuario.nome };
    return { token: this.jwtService.sign(payload) }
  }
}
