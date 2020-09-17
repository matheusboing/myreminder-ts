import { IsEmail, IsString, IsUUID } from "class-validator";

export class UsuarioDto {
    @IsString()
    nome: string;

    @IsEmail()
    email: string;

    @IsString()
    senha: string;
}

export class UsuarioEditDto extends UsuarioDto {
    @IsUUID()
    id: string;
}