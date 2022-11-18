import { IsNotEmpty, IsString } from "@nestjs/class-validator";
import { TodoStatusEnum } from "../../entities/todo";

export class AddtodoDto{
    
    
    @IsNotEmpty()
    @IsString()
    name: string;
    @IsNotEmpty()
    @IsString()
    description: string;
    @IsNotEmpty()
         
    status: TodoStatusEnum;
}