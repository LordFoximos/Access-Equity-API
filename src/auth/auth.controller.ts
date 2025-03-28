import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { CreateTokenDto } from 'src/auth/dto/token.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @HttpCode(HttpStatus.OK)
  @Post('/token')
  create(@Body() createTokenDto: CreateTokenDto) {
    return this.authService.create(createTokenDto);
  }
}
