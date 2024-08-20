import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Task {
// graphqlに変換するとき、number型はfloat型に変換されるため、Intにする
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  dueDate: string;

  @Field()
  status: 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED';

//   オプション
//   @Field({ nullable: true, name: 'desc', description: 'フィールドの説明', defaultValue: 'No description' })
  @Field({ nullable: true })
  description?: string;
}
