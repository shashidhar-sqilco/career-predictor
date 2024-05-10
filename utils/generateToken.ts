import jwt from 'jsonwebtoken';
import {JWTPayload} from '@/../utils/types'

export function generateJWT(jwtPayload: JWTPayload): string {
    const privateKey = process.env.JWT_SECRET as string;
   
    // Ensure jwtPayload contains the iat property with the current time in seconds
    const currentTimeSeconds = Math.floor(Date.now() / 1000);

    const payloadWithIatAndExp: JWTPayload = {
        ...jwtPayload,
        iat: currentTimeSeconds,   
        exp: currentTimeSeconds + 60*60,
    };

    const token = jwt.sign(payloadWithIatAndExp, privateKey);

    return token;
}
