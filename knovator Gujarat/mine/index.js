import dotenv from 'dotenv';
import connectDB from './src/config/mongoConnect.js';
dotenv.config();
if (process.argv.at(-1) === '--NODE_ENV=development') {
  console.clear();
  process.env.NODE_ENV = 'development';
} else process.env.NODE_ENV ||= 'production';

process.env.PORT ||= 8000;

 import server from './src/server.js';

/**
 * MONGODB Connection
 */

process.env.MONGO_URI ? connectDB() : console.log('MONGO_URI not found');
