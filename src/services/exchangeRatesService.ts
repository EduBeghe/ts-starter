import { Service } from 'typedi';
import logger from '../loaders/logger';
import { RatesError } from '../types/ratesResponse';
import config from '../config';
import { ClientRequest } from 'http';
import { RatesResponse } from '../types';
const https = require(`https`);

@Service()
export default class RatesService {
  basepath = `https://openexchangerates.org/api/latest.json?app_id=`;

  constructor() {}

  public async getRates(base: string): Promise<RatesResponse> {
    return new Promise((resolve, reject) => {
      const url = this.basepath + config.openExchangeId + `&base=` + base;
      https.get(url, (response: ClientRequest) => {
        response.on(`error`, (err: RatesError) => {
          logger.error(`Error retrieving Rates.`);
          reject(err);
        });
        let body = ``;

        response.on(`data`, (chunk) => {
          body += chunk;
        });

        response.on(`end`, () => {
          try {
            const data = JSON.parse(body);
            logger.info(`Rates retrieved successfully.`);
            if (data.error) {
              reject(data);
            } else {
              resolve(data);
            }
          } catch (error) {
            logger.error(`Error parsing JSON.`);
            reject(response);
          }
        });
      });
    });
  }
}
