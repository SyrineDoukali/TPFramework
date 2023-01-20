import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TodoStatusEnum } from '../models/todostatus.enum';
import { BaseEntity } from './base.entity';

@Entity('todo')
export class TodoEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 10 })
  name: string;
  @Column({ length: 50 })
  description: string;
  @Column({ type: 'enum', enum: TodoStatusEnum, default: TodoStatusEnum.actif })
  status: TodoStatusEnum;
}
