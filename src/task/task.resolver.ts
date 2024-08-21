import { Mutation, Query, Resolver } from '@nestjs/graphql';
import { TaskModel } from './models/task.model';
import { TaskService } from './task.service';
import { CreateTaskInput } from './dto/createTask.input.dto';
import { Args } from '@nestjs/graphql';
import { UpdateTaskInput } from './dto/updateTask.input.dto';

@Resolver()
export class TaskResolver {
    constructor(private readonly taskService: TaskService) {}

    @Query(() => [TaskModel])
    async getTasks(): Promise<TaskModel[]> {
        return this.taskService.getTasks();
    }

    @Mutation(() => TaskModel)
    async createTask(
        @Args('createTaskInput') createTaskInput: CreateTaskInput,
        ): Promise<TaskModel> {
        return this.taskService.createTask(createTaskInput);
    }

    @Mutation(() => TaskModel)
    async updateTask(
        @Args('updateTaskInput') updateTaskInput: UpdateTaskInput,
        ): Promise<TaskModel> {
        return this.taskService.updateTask(updateTaskInput);
    }
}
