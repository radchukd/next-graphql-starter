export * from './apollo';

export const { NODE_ENV } = process.env;
export const IS_SERVER = typeof window === 'undefined';
export const IS_PROD = NODE_ENV === 'production';
