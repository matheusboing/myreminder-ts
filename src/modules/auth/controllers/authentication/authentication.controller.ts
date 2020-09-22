import { Controller, Post, UseGuards, Request, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from '../../guards/jwtAuth.guard';
import { LocalAuthGuard } from '../../guards/localAuth.guard';
import { AuthenticationService } from '../../services/authentication/authentication.service';

@Controller('auth')
export class AuthenticationController {
    constructor(
        private readonly authService: AuthenticationService
    ){}

    @Get()
    @UseGuards(JwtAuthGuard)
    async get(@Request() req: any) {
        return req.user;
    }
    
    @Post()
    @UseGuards(LocalAuthGuard)
    async post(@Request() req: any ){
        return this.authService.generateJwt(req.user);
    }
}
