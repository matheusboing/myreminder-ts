import { Usuario } from "@app/modules/usuario/models/usuario.entity";
import { IsBoolean, IsNotEmpty, IsString, IsUUID } from "class-validator";

export class TarefaDto {
    @IsString()
    titulo: string

    @IsBoolean()
    conclusao: boolean;
}

export class TarefaEditDto extends TarefaDto {
    @IsUUID()
    id: string
}
 