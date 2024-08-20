import { Injectable } from '@nestjs/common';
import { Task } from './models/task.model';
import { TaskInput } from './dto/createTask.input.dto';

@Injectable()
export class TaskService {
    tasks: Task[] = []

    getTasks(): Task[] {

        // テスト用のハードコードはコメントアウト
        // const task1 = new Task()
        // task1.id = 1
        // task1.name = 'Task 1'
        // task1.dueDate = '2021-01-01'
        // task1.status = 'NOT_STARTED'
        // this.tasks.push(task1)
        
        return this.tasks
    }

    createTask(task: TaskInput): Task {
        const newTask = new Task()
        newTask.id = this.tasks.length + 1
        newTask.name = task.name
        newTask.dueDate = task.dueDate
        newTask.status = 'NOT_STARTED'
        newTask.description = task.description
        this.tasks.push(newTask)
        return newTask
    }

    // Task型を使用しない場合
    // createTask(
    //     @Args('name') name: string,
    //     @Args('dueDate') dueDate: string,
    //     @Args('description', { nullable: true }) description: string,
    // ): Task {
    //     const newTask = new Task()
    //     newTask.id = this.tasks.length + 1
    //     newTask.name = name
    //     newTask.dueDate = dueDate
    //     newTask.status = 'NOT_STARTED'
    //     newTask.description = description
    //     this.tasks.push(newTask)
    //     return newTask
    // }
}
