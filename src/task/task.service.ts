import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './models/task.model';
import { CreateTaskInput } from './dto/createTask.input.dto';

@Injectable()
export class TaskService {
    constructor(
        @InjectRepository(Task)
        private taskRepository: Repository<Task>,
    ) {}

    async getTasks(): Promise<Task[]> {
        return await this.taskRepository.find();
    }

    async createTask(createTaskInput: CreateTaskInput): Promise<Task> {
        const newTask = this.taskRepository.create({
            name: createTaskInput.name,
            dueDate: createTaskInput.dueDate,
            status: 'NOT_STARTED',
            description: createTaskInput.description,
        });

        return await this.taskRepository.save(newTask);
    }

    // tasks: Task[] = []

    // getTasks(): Task[] {
    //     return this.tasks
    // }

    // createTask(createTaskInput: CreateTaskInput): Task {
    //     const newTask = new Task()

    //     newTask.id = this.tasks.length + 1
    //     newTask.name = createTaskInput.name
    //     newTask.dueDate = createTaskInput.dueDate
    //     newTask.status = 'NOT_STARTED'
    //     newTask.description = createTaskInput.description

    //     // 分割代入でもOK
    //     // const { name, dueDate, description } = createTaskInput
    //     // newTask.name = name
    //     // newTask.dueDate = dueDate
    //     // newTask.status = 'NOT_STARTED'
    //     // newTask.description = description
        
    //     this.tasks.push(newTask)
    //     return newTask
    // }

}
