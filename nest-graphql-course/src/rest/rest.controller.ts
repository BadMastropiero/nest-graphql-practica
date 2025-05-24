import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { RestService } from './rest.service';
import { CreateItemDto, UpdateItemDto } from './dto/rest.dto';

@Controller('api/items')
export class RestController {
  constructor(private readonly restService: RestService) {}

  @Get()
  findAll() {
    return this.restService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.restService.findOne(+id);
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto) {
    return this.restService.create(createItemDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateItemDto: UpdateItemDto) {
    return this.restService.update(+id, updateItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.restService.remove(+id);
  }
}
