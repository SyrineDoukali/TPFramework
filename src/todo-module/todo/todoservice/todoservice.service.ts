import { Body, Delete, Get, Injectable, NotFoundException, Param, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, QueryBuilder, Repository } from 'typeorm';
import { AjouterDto } from '../../dtos/ajouter-dto';
import { MajTodo } from '../../dtos/maj-todo';
import { TodoEntity, TodoStatusEnum } from '../../entities/todo';
import { AddtodoDto } from '../dto/Add-todo.dto';

@Injectable()
export class TodoserviceService {
  constructor(
    @InjectRepository(TodoEntity)
    private todoRepository: Repository<TodoEntity>
  ) {
    
  }
  private readonly todoList = [];
  private findById(id: string): TodoEntity {
          
    const todo = this.todoList.find((newTodo) => newTodo.id == newTodo);
    if (!todo) {
      throw new NotFoundException(' Todo not found')
    }
    return todo
  }
    
  async getTodos() {
    return this.todoList;
  }

    
  async getTodoById(@Param('id') id: string): Promise<TodoEntity> {
    return this.findById(id)
  }

  async removeTodoavecTypeOrm(id: number) {
    const todoToRemove = await this.todoRepository.findOne({ where: { id } });
    if (!todoToRemove) {
      throw new NotFoundException('Todo not found');
    }
    return await this.todoRepository.remove(todoToRemove);
    
  }

  async addTodoavecTypeOrm(todo: AddtodoDto): Promise<TodoEntity> {
    return await this.todoRepository.save(todo);
    
  }
   
  async updateTodoavecTypeOrm(id: number, todo: AddtodoDto): Promise<TodoEntity> {

    const newtodo = await this.todoRepository.preload({
      id,
      ...todo
    })
    return await this.todoRepository.save(todo);
    
  }
  async addTodo(@Body() addtodo: AjouterDto) {
    const date = new Date();
    const id = uuidv4();
    const { name, description } = addtodo;
    const newTodo = {
      id: id,
      name: name,
      description: description,
      createdAt: date,
      status: TodoStatusEnum.waiting
    }
    this.todoList.push(newTodo);

  }

    
  async updateTodo(@Param('id') id, @Body() updatetodo: MajTodo) {
    const todo = await this.getTodoById(id);
    // if (todo.name) {
    //     todo.name = updatetodo.name;
    // }
       
    if (todo.description) {
      todo.description = updatetodo.description;
    }
  }

    
  async deleteTodo(@Param('id') id) {
    const index = this.todoList.findIndex((todo) => todo.id === id);
    if (index >= 0) {
      this.todoList.splice(index, 1);
    } else {
      throw new NotFoundException('Todo not found');
    }
  }
  async softRemovetodo(id: number) {
    const todoToRemove = await this.todoRepository.findOne({ where: { id } });
    if (!todoToRemove) {
      throw new NotFoundException('Todo not found');
    }
    return await this.todoRepository.softRemove(todoToRemove)
  }
  async rcovertodo(id: number) {
    const todoToRemove = await this.todoRepository.findOne({ where: { id } });
    if (!todoToRemove) {
      throw new NotFoundException('Todo not found');
    }
    return await this.todoRepository.recover(todoToRemove)
  }

  async stattodoNumberbyStatus() {
    const query = this.todoRepository.createQueryBuilder("todo");
    return await query.select("cv.status,count(cv.id)").groupBy("cv.status").getRawMany();
  }
  async getalltodos() {
    
    return await this.todoRepository.find()
  }
  async querytodobydescriptionornameorstatus(ch: String, st: TodoStatusEnum) {
    return await this.todoRepository.find({
      where: [
        {
          status: st,
        },
        {
          description: Like(`%${ch}%`),
          status: st,
        }
      ],
    });
  }
  
  
  async querytodobydescriptionornameorstatusv2(ch: String, st: TodoStatusEnum) {
    return await this.todoRepository.find({
      where: [
        {
          status: st,
        },
        {
          description: Like(`%${ch}%`),
        },
        {
          status: st,
        }
      
      ],
    });

  }
  async getTodoPagination(param): Promise<TodoEntity[]> {
    return await this.todoRepository.find({
      skip: (param.page - 1) * param.take,
      take: param.take,
    });
  }
}
function uuidv4() {
    throw new Error('Function not implemented.');
}

