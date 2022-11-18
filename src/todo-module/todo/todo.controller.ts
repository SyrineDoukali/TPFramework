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
    getTodos(){
         this.todoservice.getTodos()
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
        this.todoservice.removeTodoavecTypeOrm(id);
    }
    @Delete()
    async softdeleteTodoavectypeORM(
        @Param('id',) id:number
    )
    {
        this.todoservice.softRemovetodo(id);
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
    addTodo(@Body() addtodo: AjouterDto){
       this.todoservice.addTodo(addtodo)

    }

    @Post('/update')
    updateTodo(@Param('id') id, @Body() updatetodo: MajTodo){
        this.todoservice.updateTodo(id,updatetodo)
    }

    @Delete('/delete/:id')
    deleteTodo( @Param('id') id){
       this.todoservice.deleteTodo(id)
    }



  

}





