import { HttpException, HttpStatus } from "@nestjs/common";

/**
 * Controller base
 */
export abstract class BaseController {
    /**
     * Retorna uma resposta HTTP com código 404
     * @param message Mensagem na resposta HTTP
     */
    notFound(message: string) {
        return this.generateResponseWithStatusCode(message, HttpStatus.NOT_FOUND);
    }

    /**
     * Cria uma nova exceção HTTP
     * @param message Mensagem da resposta
     * @param statusCode Código da resposta
     */
    private generateResponseWithStatusCode(message: string, statusCode: HttpStatus) {
        return new HttpException(message, statusCode);
    }
} 