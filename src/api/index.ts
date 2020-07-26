import { Router } from 'express';
import rates from './routes/rates';

export default (): Router => {
  const app = Router();
  rates(app);

  return app;
};
