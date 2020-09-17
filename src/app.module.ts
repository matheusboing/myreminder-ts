import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { TarefaModule } from './modules/tarefa/tarefa.module';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { AuthModule } from './modules/auth/auth.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      autoLoadEntities: true,
      synchronize: true
    }),
    UsuarioModule,
    TarefaModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
