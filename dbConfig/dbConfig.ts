// src/dbConfig/dbConfig.ts

import mongoose from 'mongoose';

export async function connect() {
    try {
        mongoose.connect(process.env.MONGODB_URI as string);
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log('MongoDB connected');
        })

        connection.on('error', (err) => {
            console.error('MongoDB connection error', err);
            process.exit(1); // Exit with a non-zero exit code
        })
    } catch (error) {
        console.error('MongoDB connection error', error);
        process.exit(1); // Exit with a non-zero exit code
    }
}