import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';

@Controller('premier')
export class PremierController {

    @Get()
    getpremier(): string{
        console.log("get premier");
        return "get premier"
    }

    @Post()
    postpremier(): string{
        console.log("post premier");
        return "post premier"
    }

    @Put()
    putpremier(): string{
        console.log("put premier");
        return "put premier"
    }

    @Delete()
    deletepremier(): string{
        console.log("delete premier");
        return "delete premier"
    }

    @Patch()
    patchpremier(): string{
        console.log("patch premier");
        return "patch premier"
    }

}
