import { Router, Request, Response } from 'express';
import { Container } from 'typedi';
import RatesService from '../../services/exchangeRatesService';
import { RatesError } from '../../types/ratesResponse';
import logger from '../../loaders/logger';
import { RatesResponse } from '../../types';
const route = Router();
const _ = require(`lodash`);

export default (app: Router) => {
  app.use(`/rates`, route);

  route.get(`/convert`, (req: Request, res: Response) => {
    const from = req.query.from ? req.query.from.toString() : ``;
    const to = req.query.to ? req.query.to.toString() : ``;
    const ratesService = Container.get(RatesService);
    ratesService
      .getRates(from)
      .then((result: RatesResponse) => {
        logger.info(`Rates successfully retrieved!`);
        const converted = _.get(result.rates, to);
        if (converted) {
          res.status(200);
          res.send({
              [from]: 1,
              [to]: converted,
            }).end();
        } else {
          res.status(200);
          res.send({
              message: `Conversion format ` + to + ` not recognized.`,
              description: `Please try another conversion format.`
            }).end();
        }
      })
      .catch((err: RatesError) => {
        logger.error(`Error code:` + err.status + ` ,message:` + err.message);
        res.status(err.status || 500);
        res
          .send({
            status: err.status,
            message: err.message,
            description: err.description,
          })
          .end();
      });
  });
};
