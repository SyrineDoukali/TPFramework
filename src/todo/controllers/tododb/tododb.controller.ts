import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TodoCreate } from '../../DTO/todo-create.dto';
import { TodoUpdate } from '../../DTO/todo-update.dto';
import { TododbService } from '../../services/tododb/tododb.service';

@Controller({ path: 'todo', version: '2' })
export class TododbController {
  constructor(private todoService: TododbService) {}
  @Get()
  getTodos() {}

  @Post()
  async createTodo(@Body() todoCreate: TodoCreate) {
    return await this.todoService.addTodo(todoCreate);
  }

  @Get('/:id')
  getTodoById(@Param('id') id: string) {}

  @Delete('/:id')
  deleteTodoById(@Param() params) {}

  @Put('/:id')
  updateTodoById(@Param() params, @Body() todoUpdate: TodoUpdate) {}
}
