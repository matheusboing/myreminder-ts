import { BaseController } from "@app/base.controller";
import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { TarefaDto, TarefaEditDto } from "../../dtos/tarefa.dto";
import { TarefaService } from "../../services/tarefa.service";


@Controller("tarefa")
export class TarefaController extends BaseController {
    constructor (
        private readonly tarefaService: TarefaService,
    ) {
        super()
    }

    @Get("/:id")
    async get(@Param("id") id: string): Promise<any> {
        const tarefa = await this.tarefaService.get(id);

        if(!tarefa) {
            throw this.notFound("Tarefa não encontrada");
        }

        return tarefa;
    }

    @Post()
    async post(@Body() body: TarefaDto) {
        return await this.tarefaService.create(body);
    }

    @Put("/:id")
    async put(@Body() body: TarefaEditDto, @Param('id') id: string) {
        if(body.id !== id) {
            throw new HttpException("O ID do corpo é diferente do ID da URL", HttpStatus.BAD_REQUEST)
        }

        const tarefa = await this.tarefaService.update(body);

        if(!tarefa) {
            throw this.notFound("Usuário não encontrado")
        }

        return tarefa
    }

    @Delete("/:id")
    @HttpCode(HttpStatus.NO_CONTENT)
    async delete(@Param("id") id: string) {
        const deletado = this.tarefaService.delete(id)

        if(!deletado) {
            throw this.notFound("Tarefa não encontrada")
        }
    }
}