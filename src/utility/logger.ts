import * as winston from 'winston';

const myLevels = {
  levels: {
    error: 0,
    warning: 1,
    debug: 2,
    data: 3
  }
}

const logFormat = winston.format.printf(({level, message, label, timestamp}) => {
  return `${timestamp} [${timestamp}] ${level}: ${message}`;
});

const logger = winston.createLogger({
  levels: myLevels.levels,
  format: winston.format.combine(
    winston.format.colorize({
      message: false,
      level: true,
      colors: {
      error: 'red',
      warning: 'yellow',
      debug: 'green',
      data: 'blue'
  }
    }),
    winston.format.timestamp({
      format: 'MM-DD-YYYY | HH:mm:ss'
    }),
    winston.format.printf(info => `${info.timestamp} - ${info.level}: ${info.message}`)
  ),
  transports: [
    new winston.transports.Console({level: 'data'}),
    new winston.transports.File({filename: 'error.log', level: 'error'})
  ]
});

export default logger;