import { Module } from '@nestjs/common';
import { AuthenticationService } from './services/authentication/authentication.service';
import { AuthenticationController } from './controllers/authentication/authentication.controller';
import { UsuarioModule } from '../usuario/usuario.module';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
  imports: [UsuarioModule],
  providers: [AuthenticationService, LocalStrategy],
  controllers: [AuthenticationController],
})
export class AuthModule {}
