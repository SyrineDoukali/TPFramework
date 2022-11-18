import { UpdateDateColumn } from "typeorm/decorator/columns/UpdateDateColumn";
import { CreateDateColumn } from "typeorm/decorator/columns/CreateDateColumn";
import { DeleteDateColumn } from "typeorm/decorator/columns/DeleteDateColumn";

export class TimestampEntites{
    @CreateDateColumn({
        update:false
    })
    createdAt: Date;
@UpdateDateColumn()
updatedAt: Date;
    @DeleteDateColumn()
    deletedAt: Date;
}