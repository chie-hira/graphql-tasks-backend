import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class TaskInput {
  @Field()
  name: string;

  @Field()
  dueDate: string;

  @Field({ nullable: true })
  description?: string;
}
