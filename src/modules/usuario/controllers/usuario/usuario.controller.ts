import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  UseGuards,
  Request
} from '@nestjs/common';
import { BaseController } from '@app/base.controller';
import { UsuarioDto, UsuarioEditDto } from '@app/modules/usuario/dtos/usuario.dto';
import { UsuarioService } from '@usuario/services/usuario.service';
import { JwtAuthGuard } from '@app/modules/auth/guards/jwtAuth.guard';

@Controller('/usuario')
@UseGuards(JwtAuthGuard)
export class UsuarioController extends BaseController {
  constructor(
    private readonly usuarioService: UsuarioService
  ) {
    super();
  }

  @Get()
  async get(@Request() req: any): Promise<any> {
    const usuario = req.user;

    if (!usuario) {
      throw this.notFound('Usuário não encontrado');
    }

    return usuario;
  }

  @Post()
  async post(@Body() body: UsuarioDto) {
    const usuario = await this.usuarioService.create(body);

    if (!usuario) {
      throw new HttpException('Esse email já existe', HttpStatus.CONFLICT);
    }

    return usuario;
  }

  @Put('/:id')
  async put(@Body() body: UsuarioEditDto, @Param('id') id: string) {
    if (body.id !== id) {
      throw new HttpException(
        'O ID do corpo da requisição é diferente do ID da URL',
        HttpStatus.BAD_REQUEST,
      );
    }

    const usuario = await this.usuarioService.update(body);

    if (!usuario) {
      throw new HttpException('Usuário não encontrado', HttpStatus.NOT_FOUND);
    }

    return usuario;
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string) {
    const deletado = await this.usuarioService.delete(id);

    if (!deletado) {
      throw new HttpException('Usuário não encontrado', HttpStatus.NOT_FOUND);
    }
  }
}
