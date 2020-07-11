import { config } from 'dotenv';

config();

export const { NODE_ENV } = process.env;
export const IS_PROD = NODE_ENV === 'production';
export const { PORT } = process.env;
export const { DB_URI } = process.env;
export const { DB_NAME } = process.env;
