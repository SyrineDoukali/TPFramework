import {MaxLength, MinLength} from "class-validator";

export class TodoCreate {
    @MinLength(3, {message: 'La taille minimale du nom est 10 caractères.'})
    @MaxLength(10, {message: 'La taille maximale du nom est 10 caractères.'})
    name: string;
    @MinLength(10, {message: 'La taille minimale de la description est 10 caractères.'})
    description: string;
}