import { Get, Controller, Res } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(@Res() response) {
    return [];
  }
}
