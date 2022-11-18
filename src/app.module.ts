import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PremierModule } from './premier/premier.module';
import { TodoModuleModule } from './todo-module/todo-module.module';


@Module({
  imports: [PremierModule, TodoModuleModule,
  TypeOrmModule.forRoot({
    type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'test',
        entities: [
             'dist/**/*.entity{.ts,.js}',
        ],
        synchronize: true,


  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
