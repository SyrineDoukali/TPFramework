import { IsNotEmpty, IsString } from "@nestjs/class-validator";
export class AjouterDto {

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

}

