import { Mutation, Query, Resolver, Int } from '@nestjs/graphql';
import { TaskModel } from './models/task.model';
import { TaskService } from './task.service';
import { CreateTaskInput } from './dto/createTask.input.dto';
import { Args } from '@nestjs/graphql';
import { UpdateTaskInput } from './dto/updateTask.input.dto';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Resolver()
export class TaskResolver {
    constructor(private readonly taskService: TaskService) {}

    @Query(() => [TaskModel])
    @UseGuards(JwtAuthGuard)
    async getAllTasks(): Promise<TaskModel[]> {
        return this.taskService.getAllTasks();
    }

    @Query(() => [TaskModel])
    @UseGuards(JwtAuthGuard)
    async getTasks(@Args('userId', { type: () => Int}) userId: number): Promise<TaskModel[]> {
        return this.taskService.getTasks(userId);
    }

    @Mutation(() => TaskModel)
    @UseGuards(JwtAuthGuard)
    async createTask(
        @Args('createTaskInput') createTaskInput: CreateTaskInput,
        ): Promise<TaskModel> {
        return await this.taskService.createTask(createTaskInput);
    }

    @Mutation(() => TaskModel)
    @UseGuards(JwtAuthGuard)
    async updateTask(
        @Args('updateTaskInput') updateTaskInput: UpdateTaskInput,
        ): Promise<TaskModel> {
        return await this.taskService.updateTask(updateTaskInput);
    }

    @Mutation(() => TaskModel)
    @UseGuards(JwtAuthGuard)
    async deleteTask(
        @Args('id', { type: () => Int }) id: number,
        ): Promise<TaskModel> {
        return await this.taskService.deleteTask(id);
    }
}
