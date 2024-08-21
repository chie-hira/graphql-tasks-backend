import { InputType, Field, Int } from '@nestjs/graphql';
import { IsDateString, IsEnum, IsNotEmpty, IsOptional } from 'class-validator';
import { TaskStatus } from '../enums/task.enum';

@InputType()
export class UpdateTaskInput {
  @Field(() => Int)
  id: number;
  
  // フィールドがnullでもOK、ただしフィールドがある場合は空を許可しない
  // IsOptionalデコレータを使用することで、フィールドがnullの場合はバリデーションをスキップする
  @Field({ nullable: true })
  @IsNotEmpty()
  @IsOptional()
  name: string;

  @Field({ nullable: true })
  @IsDateString()
  @IsOptional()
  dueDate: string;

  @Field({ nullable: true })
  @IsEnum(TaskStatus)
  @IsOptional()
  status: TaskStatus;

  @Field({ nullable: true })
  description?: string;
}
