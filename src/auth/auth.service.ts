import { Injectable } from '@nestjs/common';

interface Token {
  access_token: string;
  refresh_token: string;
  expires_in: number;
}
@Injectable()
export class AuthService {
  private readonly tokens: Token[] = [];

  create(token: Token) {
    this.tokens.push(token);
  }
}
