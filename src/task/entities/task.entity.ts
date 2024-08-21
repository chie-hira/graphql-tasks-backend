import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { TaskStatus } from '../enums/task.enum';

@Entity('tasks')
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    dueDate: string;

    @Column()
    status: TaskStatus;

    @Column({ nullable: true })
    description?: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updatedAt: Date;
}
