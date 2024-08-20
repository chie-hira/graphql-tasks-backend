import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Task {
// graphqlに変換するとき、number型はfloat型に変換されるため、Numberにする
  @Field(() => Number)
  id: number;

  @Field()
  name: string;

  @Field()
  dueDate: string;

  @Field()
  status: 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED';

  @Field({ nullable: true })
  description?: string;
}
