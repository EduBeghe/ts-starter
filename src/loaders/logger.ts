const winston = require(`winston`);

const logformat = winston.format.combine(winston.format.timestamp(), winston.format.prettyPrint());

const loggerInstance = winston.createLogger({
  transports: [
    new winston.transports.Console({
      format: logformat,
    }),
  ],
});

loggerInstance.info(`Logger successfully created!`);

export default loggerInstance;
