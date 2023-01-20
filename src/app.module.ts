import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PremierModule } from './premier/premier.module';
import { TodoModule } from './todo/todo.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoEntity } from './todo/entities/todo.entity';
import { TododbController } from './todo/controllers/tododb/tododb.controller';
import { CvModule } from './cv/cv.module';
import { SkillModule } from './skill/skill.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    PremierModule,
    TodoModule,
    TypeOrmModule.forRoot({
      // type: 'sqlite',
      // database: 'tp-nest.sqlite',
      type: 'postgres',
      host: 'localhost',
      port: 5436,
      username: 'postgres',
      password: 'monmon',
      database: 'DB',
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
    }),
    CvModule,
    SkillModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
