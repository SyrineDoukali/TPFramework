import { Test, TestingModule } from '@nestjs/testing';
import { TododbController } from './tododb.controller';

describe('TododbController', () => {
  let controller: TododbController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TododbController],
    }).compile();

    controller = module.get<TododbController>(TododbController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
