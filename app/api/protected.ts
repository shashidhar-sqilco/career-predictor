import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

export default function protectedRoute(req: NextApiRequest, res: NextApiResponse) {
    // Get token from request headers
    const token = req.headers.authorization?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    try {
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET!);
        // If token is valid, continue with the request
        return res.status(200).json({ message: 'Authorized', user: decoded });
    } catch (error) {
        // Token is invalid or expired
        return res.status(401).json({ error: 'Unauthorized' });
    }
}
