import {Column, CreateDateColumn, DeleteDateColumn, Entity, UpdateDateColumn} from "typeorm";
import {TodoStatusEnum} from "../models/todostatus.enum";

@Entity("base")
export class BaseEntity {
    @CreateDateColumn({update: false})
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt: Date;
    @DeleteDateColumn()
    deletedAt: Date;
}