import { Body, Controller, Delete, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { Todo, TodoStatusEnum } from '../entities/todo';
import { v4 as uuidv4 } from 'uuid';
import { AjouterDto } from '../dtos/ajouter-dto';
import { MajTodo } from '../dtos/maj-todo';


@Controller('todo')
export class TodoController {

    private todoList =[];

    @Get()
    getTodos(){
        return this.todoList;
    }

    @Get('/:id')
    getTodoById(@Param('id') id : string): Todo{
       return this.findById(id)
    }


    @Post('/add')
    addTodo(@Body() addtodo: AjouterDto){
       const date = new Date();
       const id = uuidv4();
       const {name, description} = addtodo;
       const newTodo = {
          id: id,
          name : name,
          description: description,
          createdAt: date,
          status : TodoStatusEnum.waiting
       }
       this.todoList.push(newTodo);

    }

    @Post('/update')
    updateTodo(@Param('id') id, @Body() updatetodo: MajTodo){
        const todo = this.getTodoById(id);
        // if (todo.name) {
        //     todo.name = updatetodo.name;
        // }
       
        if (todo.description) {
            todo.description = updatetodo.description;
        }
    }

    @Delete('/delete/:id')
    deleteTodo( @Param('id') id){
        const index = this.todoList.findIndex((todo) => todo.id === id);
        if (index >= 0 ) {
            this.todoList.splice(index, 1);
          } else {
            throw new NotFoundException('Todo not found');
          }
    }
    private findById(id: string): Todo{
        const todo = this.todoList.find((newTodo)=> newTodo.id == newTodo);
       if (!todo){
        throw new NotFoundException(' Todo not found')
       }
       return todo
    }

}





