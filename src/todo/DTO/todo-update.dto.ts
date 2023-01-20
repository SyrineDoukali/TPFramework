import {TodoCreate} from "./todo-create.dto";
import {PartialType} from "@nestjs/mapped-types";
import {IsEnum, IsOptional} from "class-validator";
import {TodoStatusEnum} from "../models/todostatus.enum";

export class TodoUpdate extends PartialType(TodoCreate) {
    @IsOptional()
    @IsEnum(TodoStatusEnum)
    status: TodoStatusEnum;
}