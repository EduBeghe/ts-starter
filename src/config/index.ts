import * as dotenv from 'dotenv';
import * as logger from 'winston';

process.env.NODE_ENV = `development`;

const envFound = dotenv.config();

if (envFound.error) {
  logger.error(`Couldn't find .env file`);
  throw new Error(`Couldn't find .env file`);
}

export default {
  port: process.env.PORT ? parseInt(process.env.PORT, 10) : `3000`,
  hostname: process.env.HOSTNAME,
  openExchangeId: process.env.OPEN_EXCHANGE_ID,
  logs: {
    level: process.env.LOG_LEVEL || `silly`,
  },
  api: {
    prefix: `/api`,
  },
};
