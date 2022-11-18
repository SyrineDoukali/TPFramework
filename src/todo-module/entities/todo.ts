import { Column } from "typeorm";
import { PrimaryGeneratedColumn } from "typeorm/decorator/columns/PrimaryGeneratedColumn";
import { TimestampEntites } from "../../generics/timestamp.entities";

export enum TodoStatusEnum{
    'actif' = "En cours",
    'waiting' = "En attente",
    'done' = "Finalisé"
}

export class TodoEntity extends TimestampEntites{
    @PrimaryGeneratedColumn() 
    id: number;
    @Column()
    name: string;
    @Column()
    description: string;
    @Column()
    status: TodoStatusEnum;
}

