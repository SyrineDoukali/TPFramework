import { Module } from '@nestjs/common';
import { TodoController } from './controllers/todo/todo.controller';
import { TododbController } from './controllers/tododb/tododb.controller';
import { TododbService } from './services/tododb/tododb.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoEntity } from './entities/todo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TodoEntity])],
  controllers: [TodoController, TododbController],
  providers: [TododbService],
})
export class TodoModule {}
