import { IsNotEmpty, IsString } from "@nestjs/class-validator";
export class AjouterDto {

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;
   @IsString()
  @IsNotEmpty()
   created: string;
   @IsString()
  @IsNotEmpty()
  id: string;


}

