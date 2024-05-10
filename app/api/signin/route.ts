import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { JWTPayload } from '@/utils/types';
import { generateJWT } from '@/utils/generateToken';
import { serialize } from 'cookie'
 
 
 
connect();

export async function POST(req: NextRequest, res: NextResponse) {


   
   
    try {
        const body = await req.json() as { email: string, password: string };
        const user = await User.findOne({ email: body.email });

        if (!user) {
            return new NextResponse(
                JSON.stringify({ message: 'User not found' }),
                { status: 404 }
            );
        }

        const isPasswordMatch = await bcrypt.compare(body.password, user.password);
        if (!isPasswordMatch) {
            return new NextResponse(
                JSON.stringify({ message: 'Incorrect password' }),
                { status: 401 }
            );
        }

        const jwtPayload: JWTPayload = {
            id: user.id,
            isAdmin: user.isAdmin,
            name: user.name,
            iat: 0,
            exp: 60*60
        };

        const token = generateJWT(jwtPayload);
  
        const maxAge = 60 * 60; // 1 week

        // Set cookies
         
 return NextResponse.json(
        { message: 'Authenticated', token },
        { status: 200, headers: { 'Set-Cookie': `token=${token}; Max-Age=${maxAge}; HttpOnly` } }
    );
      
        
    } catch (error: any) {
        console.error('Internal server error:', error);
        // Add more detailed error logging
        if (error.stack) {
            console.error('Stack trace:', error.stack);
        }
        if (error.response && error.response.data) {
            console.error('Error response data:', error.response.data);
        }
        return new NextResponse(
            JSON.stringify({ message: 'Internal server error', error }),
            { status: 500 }
        );
    }
}
