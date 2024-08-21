import { Mutation, Query, Resolver } from '@nestjs/graphql';
import { TaskModel } from './models/task.model';
import { TaskService } from './task.service';
import { CreateTaskInput } from './dto/createTask.input.dto';
import { Args } from '@nestjs/graphql';

@Resolver()
export class TaskResolver {
    constructor(private readonly taskService: TaskService) {}

    @Query(() => [TaskModel])
    async getTasks() {
        return this.taskService.getTasks();
    }

    @Mutation(() => TaskModel)
    async createTask(
        @Args('createTaskInput') task: CreateTaskInput,
        ): Promise<TaskModel> {
        return this.taskService.createTask(task);
    }
}
