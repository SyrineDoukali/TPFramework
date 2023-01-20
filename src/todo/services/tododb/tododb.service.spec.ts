import { Test, TestingModule } from '@nestjs/testing';
import { TododbService } from './tododb.service';

describe('TododbService', () => {
  let service: TododbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TododbService],
    }).compile();

    service = module.get<TododbService>(TododbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
