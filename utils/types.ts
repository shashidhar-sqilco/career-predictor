import { User } from "next-auth";
import jwt from 'jsonwebtoken';

export type JWTPayload = {
    id: number;
    isAdmin: boolean;
    name: string;
    iat: Number
    exp: Number
}
declare module "next-auth" {
    interface Session {
        user: User;
    }
}

declare module "next-auth/jwt" {
    interface jwt {
        user: User;
    }
}