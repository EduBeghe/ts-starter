import config from './config';
import logger from './loaders/logger';
import express from './loaders/express';

express
  .listen(config.port, () => {
    logger.info(`Server is up and ready!`);
  })
  .on(`error`, () => logger.error(`Error creating server.`));
