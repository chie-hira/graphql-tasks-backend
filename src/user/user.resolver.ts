import { Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserModel } from './models/user.model';
import { CreateUserInput } from './dto/createUser.input.dto';
import { Args } from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { GetUserArgs } from './dto/getUser.input.dto';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Resolver()
export class UserResolver {
    constructor(private readonly userService: UserService) {}

    @Query(() => UserModel, { nullable: true })
    @UseGuards(JwtAuthGuard) // 認証していないとアクセスできない
    async getUser(@Args() GetUserArgs: GetUserArgs): Promise<User> {
        return await this.userService.getUser(GetUserArgs.email);
    }

    @Mutation(() => UserModel)
    async createUser(
        @Args('createUserInput') createUserInput: CreateUserInput,
    ): Promise<UserModel> {
        return await this.userService.createUser(createUserInput);
    }
}
