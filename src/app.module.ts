import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { TaskModule } from './task/task.module';
import { UserResolver } from './user/user.resolver';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',          // 使用するデータベースのタイプ
      host: 'localhost',      // データベースのホスト
      port: 3306,
      username: 'user',
      password: 'password',
      database: 'sample',
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // エンティティのパス
      synchronize: false,
      // アプリケーションを再起動するたびにエンティティを同期
      // エンティティ名を修正したとき、古いエンティティ名のテーブルがそのまま残るため、falseにしてmigrateを使う
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql')
    }),
    TaskModule,
    UserModule
  ],
  providers: [UserResolver, UserService],
})
export class AppModule {}
