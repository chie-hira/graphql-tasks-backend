import { Field, Int, ObjectType } from "@nestjs/graphql";
import { TaskStatus } from "../enums/task.enum";
import { UserModel } from "src/user/models/user.model";

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

    @Field({ nullable: true })
    description?: string;

    @Field()
    createdAt: Date;

    @Field()
    updatedAt: Date;

    @Field(() => UserModel)
    user: UserModel;
}
