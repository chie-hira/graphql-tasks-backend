import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Field, Int, ObjectType } from "@nestjs/graphql";

// 
@Entity()  // TypeORMのエンティティとして使用
@ObjectType()  // GraphQLのモデルとして使用
export class Task {
    // graphqlに変換するとき、number型はfloat型に変換されるため、Intにする
    @PrimaryGeneratedColumn()
    @Field(() => Int)
    id: number;

    @Column()
    @Field()
    name: string;

    @Column()
    @Field()
    dueDate: string;

    @Column()
    @Field()
    status: 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED';

    //   オプション
    //   @Field({ nullable: true, name: 'desc', description: 'フィールドの説明', defaultValue: 'No description' })
    @Column({ nullable: true })
    @Field({ nullable: true })
    description?: string;
}
