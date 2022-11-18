import { Module } from '@nestjs/common';
import { TodoController } from './todo/todo.controller';
import { CommonModule } from './common/common.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoEntity } from './entities/todo';

@Module({
  controllers: [TodoController],
  imports: [CommonModule, TypeOrmModule.forFeature(
  
     [TodoEntity])]
})
export class TodoModuleModule {}
