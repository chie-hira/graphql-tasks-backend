import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TaskModel } from './models/task.model';
import { Task } from './entities/task.entity';
import { TaskStatus } from './enums/task.enum';
import { CreateTaskInput } from './dto/createTask.input.dto';

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
        const newTask = this.taskRepository.create({
            name: createTaskInput.name,
            dueDate: createTaskInput.dueDate,
            status: TaskStatus.NOT_STARTED,
            description: createTaskInput.description,
        });

        return await this.taskRepository.save(newTask);
    }
}
