import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm/dist/common/typeorm.decorators";
import { Repository } from "typeorm";
import { TarefaDto, TarefaEditDto } from "../dtos/tarefa.dto";
import { Tarefa } from "../models/tarefa.entity";

@Injectable()
export class TarefaService {
    constructor(
        @InjectRepository(Tarefa)
        private tarefaRepository: Repository<Tarefa>,
    ) {}

    async get(id: string) {
        return await this.tarefaRepository.findOne(id, {relations: ["usuario"]})
    }

    async create(tarefaDto: TarefaDto) {
        return await this.tarefaRepository.save(tarefaDto);
    }

    async update(tarefa: TarefaEditDto) {
        if(!(await this.get(tarefa.id))) {
            return null;
        }

        return await this.tarefaRepository.save(tarefa)
    }

    async delete(id: string) {
        const tarefa = await this.get(id);

        if(!tarefa) {
            return null;
        }

        return await this.tarefaRepository.remove(tarefa);
    }

}