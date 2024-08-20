import { Query, Resolver } from '@nestjs/graphql';
import { Task } from './models/task.model';
import { TaskService } from './task.service';

@Resolver()
export class TaskResolver {
    constructor(private readonly taskService: TaskService) {}

    // [Task]はgraphqlの型定義
    // nullable: 'items'は配列がnullの場合、nullを返す
    // nullable: 'itemsAndList'は配列がnullの場合、空の配列を返す
    // @Query(() => [Task], { nullable: 'itemsAndList', name: 'tasks' })
    @Query(() => [Task], { nullable: 'items' })
    // Task[]はtypescriptの型定義
    getTasks(): Task[] {
        return this.taskService.getTasks()
    }
}
