export type JwtPayload = {
    email: string;
    sub: number; // subject: user id 認証を行うユーザーのID　識別子
};
