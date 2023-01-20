import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {TodoModel} from "../../models/Todo.model";
import {TodoCreate} from "../../DTO/todo-create.dto";
import {TodoUpdate} from "../../DTO/todo-update.dto";


@Controller({path: 'todo', version: '1',})
export class TodoController {
    private todos: TodoModel[] = [];

    @Get()
    getTodos(): TodoModel[] {
        return this.todos;
    }

    @Post()
    createTodo(@Body() todoCreate: TodoCreate): TodoModel[] {
        const todo = new TodoModel(todoCreate.name, todoCreate.description);
        this.todos.push(todo);
        return this.todos;
    }

    @Get('/:id')
    getTodoById(@Param("id") id: string) {
        const todo = this.todos.find((element) => element.id === id);
        if (todo) {
            return todo;
        } else {
            return 'not found';
        }
    }

    @Delete('/:id')
    deleteTodoById(@Param() params) {
        const id = params.id;
        const todo = this.todos.find((element) => element.id === id);
        if (todo) {
            const todoId = this.todos.indexOf(todo);
            this.todos.splice(todoId, 1);
            return this.todos;
        } else {
            return 'not found';
        }
    }

    @Put('/:id')
    updateTodoById(@Param() params, @Body() todoUpdate: TodoUpdate) {
        const id = params.id;
        const todo = this.todos.find((element) => element.id === id);
        if (todo) {
            const todoId = this.todos.indexOf(todo);
            if (todoUpdate.name !== undefined)
                this.todos[todoId].name = todoUpdate.name;
            if (todoUpdate.description !== undefined)
                this.todos[todoId].description = todoUpdate.description;
            if (todoUpdate.status !== undefined)
                this.todos[todoId].status = todoUpdate.status;
            return this.todos;
        } else {
            return 'not found';
        }
    }
}
