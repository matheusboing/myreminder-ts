import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthenticationService } from '../services/authentication/authentication.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthenticationService) {
    super({
      usernameField: "email",
      passwordField: "senha"
    });
  }

  async validate(email: string, senha: string): Promise<any> {
    const usuario = await this.authService.login(email, senha);

    if (!usuario) {
      throw new UnauthorizedException();
    }

    return usuario;
  }
}
