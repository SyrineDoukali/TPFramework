import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post } from '@nestjs/common';
import { TodoEntity, TodoStatusEnum } from '../entities/todo';
import { v4 as uuidv4 } from 'uuid';
import { AjouterDto } from '../dtos/ajouter-dto';
import { MajTodo } from '../dtos/maj-todo';
import { TodoserviceService } from './todoservice/todoservice.service';
import { UpdatetodoDto } from './dto/update-todo.dto';
import { get } from 'http';


@Controller('todo')
export class TodoController {
    
    constructor(private todoservice: TodoserviceService) { }

    private todoList =[];

    @Get()
    async getTodos(){
   return await  this.todoservice.getTodos()
    }

    @Get()
    async getallTodos() {
        return await this.getallTodos();
        }

    

    @Post()
    async createTodoavectypeORM(
        @Body() updatetodoDto: UpdatetodoDto,
    
    ):Promise<TodoEntity>
    {
       return await this.todoservice.addTodoavecTypeOrm(updatetodoDto);
    }
    @Patch()
    async updateTodoavectypeORM(
        @Body() updatetodoDto: UpdatetodoDto,
        @Param('id') id:number
    ):Promise<TodoEntity>
    {
       return await this.todoservice.updateTodoavecTypeOrm(id,updatetodoDto);
    }
    @Delete()
    async deleteTodoavectypeORM(
        @Param('id',) id:number
    )
    {
       return await this.todoservice.removeTodoavecTypeOrm(id);
    }
    @Delete()
    async softdeleteTodoavectypeORM(
        @Param('id',) id:number
    )
    {
      return await  this.todoservice.softRemovetodo(id);
    }
    @Get('recover/:id')
    async revocer(
    @Param('id',) id: number)
     {
        return await this.revocer(id)
    }
    @Get('/:id')
    getTodoById(@Param('id') id : string){
         this.todoservice.getTodoById(id);
    }
    @Get('stat')
    async statstodoNumberByStatus() {
        return this.todoservice.stattodoNumberbyStatus()
    }
    
    @Post('/add')
    async addTodo(@Body() addtodo: AjouterDto){
       return await this.todoservice.addTodo(addtodo)

    }

    @Post('/update')
    async updateTodo(@Param('id') id, @Body() updatetodo: MajTodo){
       return await this.todoservice.updateTodo(id,updatetodo)
    }

    @Delete('/delete/:id')
    async deleteTodo( @Param('id') id){
     return await  this.todoservice.deleteTodo(id)
    }
    @Get('/statusanddata')
    async getTodoByStringAndStatus(
        @Param('string') ch: String,
        @Param('status') st:TodoStatusEnum,
    )
    {
        return await this.todoservice.querytodobydescriptionornameorstatus(ch,st)
    }

    @Get('/statusanddatav2')
    async getTodoByStringAndStatusv2(
        @Param('string') ch: String,
        @Param('status') st:TodoStatusEnum,
    )
    {
        return await this.todoservice.querytodobydescriptionornameorstatusv2(ch,st)
    }


  

}





