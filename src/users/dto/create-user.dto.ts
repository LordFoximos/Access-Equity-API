import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    minLength: 1,
  })
  name: string;
  @ApiProperty()
  password: string;
  @ApiProperty({
    format: 'email',
  })
  email: string;
}
