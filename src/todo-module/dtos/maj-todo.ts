import { IsNotEmpty, IsString } from "@nestjs/class-validator";
import { PickType } from "@nestjs/mapped-types";
import { AjouterDto } from "./ajouter-dto";
export class MajTodo extends PickType(AjouterDto,['description','name'] )
{

}
