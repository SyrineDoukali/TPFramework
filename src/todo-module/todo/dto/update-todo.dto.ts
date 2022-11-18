import { IsNotEmpty, IsOptional, IsString } from "@nestjs/class-validator";
import { TodoStatusEnum } from "../../entities/todo";

export class UpdatetodoDto{
    
    
    @IsOptional()
    @IsString()
    name: string;
    @IsOptional()
    @IsString()
    description: string;
    @IsOptional()
         
    status: TodoStatusEnum;
}