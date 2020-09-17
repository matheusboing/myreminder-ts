import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { LocalAuthGuard } from '../../guards/localAuth.guard';

@Controller('auth')
export class AuthenticationController {
    @Post()
    @UseGuards(LocalAuthGuard)
    async post(@Request() req: any ){
        return req.user;
    }
}
