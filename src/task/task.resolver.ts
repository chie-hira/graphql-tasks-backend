import { Query, Resolver } from '@nestjs/graphql';
import { Task } from './models/task.model';
import { TaskService } from './task.service';

@Resolver()
export class TaskResolver {
    constructor(private readonly taskService: TaskService) {}

    // [Task]はgraphqlの型定義
    @Query(() => [Task], { nullable: 'items'})
    // Task[]はtypescriptの型定義
    getTasks(): Task[] {
        return this.taskService.getTasks()
    }
}
