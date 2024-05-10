import { NextAuthOptions } from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider from 'next-auth/providers/facebook'
import LinkedInProvider from "next-auth/providers/linkedin";
import CredentialsProvider from 'next-auth/providers/credentials'
import NextAuth from "next-auth"
import User from "@/models/userModel";
import { compare } from 'bcryptjs';

import { connect } from '@/dbConfig/dbConfig';
import jwt from 'jsonwebtoken';


async function authorize(credentials: any, req: any) {

    const { email, password } = credentials;
    const db = await connect(); // Connect to your MongoDB database




    if (!credentials?.email || !credentials?.password) {
        return null; // User not found
    }
    const existingUser = await User.findOne({ where: { email: credentials?.email } });
    if (!existingUser) {
        return null; // User not found
    }

    const isValidPassword = await compare(credentials?.password, existingUser.password);

    if (!isValidPassword) {
        return null; // Invalid password
    }

    // Authentication successful, return user data
    return {
        id: `${existingUser.id}`,
        email: existingUser.email,
        name: existingUser.name,
    };
}
export const options: NextAuthOptions = {

    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID as string,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
        }),
        LinkedInProvider({
            clientId: process.env.LINKEDIN_CLIENT_ID as string,
            clientSecret: process.env.LINKEDIN_CLIENT_SECRET as string
        }),

        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: {
                    label: 'Email Address',
                    type: 'text',
                    placeholder: 'Email address...'
                },
                password: {
                    label: 'Password',
                    type: 'password',
                    placeholder: 'Password...'
                },
            },
            authorize,


        }),

    ], callbacks: {
        async jwt({ token, user }) {



            if (user) {
                return {
                    ...token,
                    email: user.email,
                    name: user.name,
                    id: user.id
                }
            }
            return { token };
        },
        async session({ session, token, user }) {
            // Send properties to the client, like an access_token from a provider.

            return {
                ...session,

                user: {
                    ...session.user,
                    name: token.name
                }
            }
        },
    },
    pages: {
        signIn: '/api/sign-in'

    },
    session: {
        strategy: 'jwt'
    }
}

const handler = NextAuth(options)
export { handler as GET, handler as POST }