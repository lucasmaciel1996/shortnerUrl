import { Router } from 'express';
import { addDays, parseISO } from 'date-fns';
import crypto from 'crypto';
import CreateEncurtadoService from '../services/CreateEncurtadorService';

const encurtadorRouter = Router();

encurtadorRouter.post('/', async (request, response) => {
  const { url } = request.body;
  const hash = crypto.randomBytes(4).toString('hex');

  const date_to_expire = addDays(parseISO(new Date().toISOString()), 3);
  const encurtadorService = new CreateEncurtadoService();

  const { id, url_short, date_expire } = await encurtadorService.execute({
    url,
    url_short: hash,
    date_expire: date_to_expire,
  });

  return response.json({
    id,
    url,
    newurl: `http://localhost:3434/${url_short}`,
    date_expire,
  });
});

export default encurtadorRouter;
