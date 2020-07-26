import { Service } from 'typedi';
import { EmailBody } from '../types/emailBody';
import logger from '../loaders/logger';

@Service()
export default class EmailService {
  constructor() {}

  public async sendEmail(email: string, body: EmailBody) {
    logger.info(`Email sent to ` + email);
    // TODO
  }
}
