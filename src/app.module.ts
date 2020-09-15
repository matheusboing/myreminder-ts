import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { UsuarioModule } from './modules/usuario/usuario.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      autoLoadEntities: true,
      synchronize: true
    }),
    UsuarioModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
