import { IsNotEmpty, IsString } from "@nestjs/class-validator";

export class MajTodo {
    @IsString()
    @IsNotEmpty()
    name: string;
  
    @IsString()
    @IsNotEmpty()
    description: string;
  
}
