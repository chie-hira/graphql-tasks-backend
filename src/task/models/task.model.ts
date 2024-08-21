import { Field, Int, ObjectType } from "@nestjs/graphql";
import { TaskStatus } from "../enums/task.enum";

@ObjectType()
export class TaskModel {
    // graphqlに変換するとき、number型はfloat型に変換されるため、Intにする
    @Field(() => Int)
    id: number;

    @Field()
    name: string;

    @Field()
    dueDate: string;

    @Field()
    status: TaskStatus;

    //   オプション
    //   @Field({ nullable: true, name: 'desc', description: 'フィールドの説明', defaultValue: 'No description' })
    @Field({ nullable: true })
    description?: string;

    @Field()
    createdAt: Date;

    @Field()
    updatedAt: Date;
}
