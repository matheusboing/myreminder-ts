import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { UsuarioController } from '@usuario/controllers/usuario/usuario.controller';
import { Usuario } from '@app/modules/usuario/models/usuario.entity';
import { UsuarioService } from '@usuario/services/usuario.service';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario])],
  providers: [UsuarioService],
  controllers: [UsuarioController],
  exports: [UsuarioService],
})
export class UsuarioModule {}
