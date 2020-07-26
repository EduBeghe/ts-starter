const express = require(`express`);
import { Request, Response, NextFunction } from 'express';
import { ResponseError } from '../types';
import routes from '../api';
import config from '../config';

const app = express();

app.get(`/`, (req: Request, res: Response) => {
  res.status(200).send({ message: `Welcome to the rates conversor server!` }).end();
});
app.get(`/status`, (req: Request, res: Response) => {
  res.status(200).end();
});
app.head(`/status`, (req: Request, res: Response) => {
  res.status(200).end();
});

//  Load API routes
app.use(config.api.prefix, routes());

//  catch 404 and forward to error handler
app.use((req: Request, res: Response, next: NextFunction) => {
  const err = new ResponseError(`Not Found`);
  err.status = 404;
  next(err);
});

//  error handlers
app.use((err: ResponseError, req: Request, res: Response, next: NextFunction) => {
  /**
   * Handle 401
   */
  if (err.name === `UnauthorizedError`) {
    return res.status(err.status).send({ message: err.message }).end();
  }
  return next(err);
});
app.use((err: ResponseError, req: Request, res: Response) => {
  res.status(err.status || 500);
  res.json({
    errors: {
      message: err.message,
    },
  });
});

export default app;
