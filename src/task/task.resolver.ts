import { Mutation, Query, Resolver } from '@nestjs/graphql';
import { Task } from './models/task.model';
import { TaskService } from './task.service';
import { CreateTaskInput } from './dto/createTask.input.dto';
import { Args } from '@nestjs/graphql';

@Resolver()
export class TaskResolver {
    constructor(private readonly taskService: TaskService) {}

    @Query(() => [Task])
    async getTasks() {
        return this.taskService.getTasks();
    }

    @Mutation(() => Task)
    async createTask(
        @Args('createTaskInput') task: CreateTaskInput,
        ): Promise<Task> {
        return this.taskService.createTask(task);
    }
}
