import { RateConversion } from './rateConversion';

export interface RatesResponse {
  disclaimer: string;
  license: string;
  timestamp: string;
  base: string;
  rates: RateConversion;
}

export interface RatesError {
  error: boolean;
  status: 403;
  message: string;
  description: string;
}
