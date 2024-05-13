import { connect } from "@/./utils/dbConfig/dbConfig";
import User from "@/./utils/models/User";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { JWTPayload } from '@/utils/types'
import { generateJWT } from '@/utils/generateToken'
import { RegisterUserDto } from "@/utils/dtos";

connect();

export async function POST(request: NextRequest) {
    try {
        const body = await request.json() as RegisterUserDto;

        const user = await User.findOne({ email: body.email });
        if (user) {
            return NextResponse.json(
                { message: 'user already exists' },
                { status: 400 }
            );
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(body.password, salt);

        // Create a new instance of the User model
        const newUser = new User({
            name: body.name,
            email: body.email,
            password: hashedPassword,
            phone: body.phone
        });
       

        // Save the new user to the database
        await newUser.save();

        // Find the saved user
        const savedUser = await User.findOne({ email: body.email });

        // Check if the user exists
        if (!savedUser) {
            // Handle the case where the user doesn't exist
            return NextResponse.json(
                { message: 'User not found' },
                { status: 404 }
            );
        }

        // Construct the JWT payload
        const jwtPayload: JWTPayload = {
            id: newUser.id,
            isAdmin: newUser.isAdmin,
            name: newUser.name,
            iat: Math.floor(Date.now() / 1000), // current time in seconds
            exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24), // expiration time: 1 day from now
        };

        // Generate JWT token
        const token = generateJWT(jwtPayload);

        // Return the response with selected fields and token
        return NextResponse.json({
            id: savedUser._id,
            name: savedUser.name,
            isAdmin: savedUser.isAdmin,
            token
        }, { status: 201 });
    } catch (error: any) {
        console.error(error); // Log the error for debugging
        return NextResponse.json(
            { message: 'internal server error' },
            { status: 500 }
        );
    }
}