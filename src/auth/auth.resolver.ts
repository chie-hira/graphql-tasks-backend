import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInResponse } from './dto/signInResponse';
import { GqlAuthGuard } from './guards/gql-auth.guard';
import { SignInInput } from './dto/signIn.input';

@Resolver()
export class AuthResolver {
    // DI (AuthService)
    constructor(private readonly authService: AuthService) {}

    @Mutation(() => SignInResponse)
    @UseGuards(GqlAuthGuard) // バリデーション 認証に成功した場合のみsignIn実行
    async signIn(
        @Args('signInInput') signInInput: SignInInput,
        @Context() context: any // GraphQLのコンテキストを取得
    ): Promise<SignInResponse> {
        // context.userにはstrategyの戻り値ユーザーオブジェクトが格納されている
        
        return await this.authService.signIn(context.user);
    }

}
