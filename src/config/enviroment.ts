import * as dotenv from 'dotenv';

dotenv.config();

interface EnvInterface {
  SERVER_PORT: string;
  NODE_ENV: string;
  DATABASE_URL: string;
  JWT_TOKEN_SECRET: string;
}

export const env: EnvInterface = {
  SERVER_PORT: process.env.PORT || '8080',
  NODE_ENV: process.env.NODE_ENV || '',
  DATABASE_URL: process.env.DATABASE_URL || '',
  JWT_TOKEN_SECRET: process.env.JWT_TOKEN_SECRET || '',
}
