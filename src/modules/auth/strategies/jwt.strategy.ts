import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt } from 'passport-jwt';
import { Strategy } from 'passport-jwt';

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'Ue_hk@WvsCc3V2_kb3VnjVZHoGHfUVme6DBx-zoB-oM48RjY*j'
    });
  }

  async validate(payload: any) {
    return { id: payload.sub, nome: payload.nome };
  }
}
