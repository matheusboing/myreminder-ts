import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm/dist/typeorm.module";
import { TarefaController } from "./controller/tarefa/tarefa.controller";
import { Tarefa } from "./models/tarefa.entity";
import { TarefaService } from "./services/tarefa.service";


@Module({
    imports: [
        TypeOrmModule.forFeature([Tarefa])
    ],
    providers: [
        TarefaService
    ],
    controllers: [
        TarefaController
    ]
})

export class TarefaModule {}