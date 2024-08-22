import { ExecutionContext } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { AuthGuard } from "@nestjs/passport";

// gql用のAuthGuardを作成
export class GqlAuthGuard extends AuthGuard('local') {
    constructor() {
        super(); // 親クラスのコンストラクタsuper()を呼び出す
    }

    // getAuthRequestはREST API用に親クラスのAuthGuardで定義されている
    // GraphQLで使用できるようにオーバーライドする
    // メソッド名は変更してはいけない
    getRequest(context: ExecutionContext) {
        const ctx = GqlExecutionContext.create(context);
        const request = ctx.getContext();
        request.body = ctx.getArgs().signInInput;

        return request;
    }
}
