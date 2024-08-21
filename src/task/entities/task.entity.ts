import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('tasks')
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    dueDate: string;

    @Column()
    status: 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED';

    @Column({ nullable: true })
    description?: string;
}
