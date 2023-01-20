import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TodoEntity } from '../../entities/todo.entity';
import { Repository } from 'typeorm';
import { TodoCreate } from '../../DTO/todo-create.dto';

@Injectable()
export class TododbService {
  constructor(
    @InjectRepository(TodoEntity)
    private readonly todoRepository: Repository<TodoEntity>,
  ) {}

  async addTodo(todoCreate: TodoCreate) {
    const todo = new TodoEntity();
    todo.name = todoCreate.name;
    todo.description = todoCreate.description;
    return await this.todoRepository.save(todo);
  }
}
