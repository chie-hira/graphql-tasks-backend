import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TaskModel } from './models/task.model';
import { Task } from './entities/task.entity';
import { CreateTaskInput } from './dto/createTask.input.dto';
import { UpdateTaskInput } from './dto/updateTask.input.dto';

@Injectable()
export class TaskService {
    constructor(
        @InjectRepository(Task)
        private taskRepository: Repository<Task>,
    ) {}

    async getTasks(): Promise<TaskModel[]> {
        return await this.taskRepository.find();
    }

    async createTask(createTaskInput: CreateTaskInput): Promise<TaskModel> {
        const { name, dueDate, description } = createTaskInput;
        return await this.taskRepository.create({
            name,
            dueDate,
            description,
        });
    }

    async updateTask(updateTaskInput: UpdateTaskInput): Promise<TaskModel> {
        const { id, name, dueDate, status, description } = updateTaskInput;

        await this.taskRepository.update(id, {
            name,
            dueDate,
            status,
            description,
        });

        const updatedTask = await this.taskRepository.findOne({ where: { id } });

        if (updatedTask) {
            return updatedTask;
        } else {
            throw new Error('Task not found');
        }
    }
}
