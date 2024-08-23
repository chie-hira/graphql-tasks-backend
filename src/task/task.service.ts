import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TaskModel } from './models/task.model';
import { Task } from './entities/task.entity';
import { User } from 'src/user/entities/user.entity';
import { CreateTaskInput } from './dto/createTask.input.dto';
import { UpdateTaskInput } from './dto/updateTask.input.dto';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async getAllTasks(): Promise<TaskModel[]> {
    return await this.taskRepository.find({ relations: ['user'] });
  }

  async getTasks(userId: number): Promise<TaskModel[]> {
    const user = await this.userRepository.findOne({ where: { id: userId } });

    return await this.taskRepository.find({
      relations: ['user'],
      where: { user: user },
    });
  }

  async createTask(createTaskInput: CreateTaskInput): Promise<TaskModel> {
    const { name, dueDate, description, userId } = createTaskInput;
    const user = await this.userRepository.findOne({ where: { id: userId } });

    const newTask = this.taskRepository.create({
      name,
      dueDate,
      description,
      user,
    });

    return await this.taskRepository.save(newTask);
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

  async deleteTask(id: number): Promise<TaskModel> {
    const deleteTask = await this.taskRepository.findOne({ where: { id } });
    const deleteResult = await this.taskRepository.delete(id);

    if (deleteResult.affected) {
      return deleteTask;
    } else {
      throw new Error('Task not found');
    }
  }
}
