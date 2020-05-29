import { Router } from 'express';
import { getRepository } from 'typeorm';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../api-docs/swagger.json';
import Encurtador from '../models/Encurtador';
import encurtadorRouter from './encurtador.routes';

const routes = Router();

const options = {
  customCss: '.swagger-ui .topbar {display: none}',
};

routes.use('/api-docs', swaggerUi.serve);
routes.get('/api-docs', swaggerUi.setup(swaggerDocument, options));

routes.get('/:rota', async (request, response) => {
  const { rota } = request.params;
  const encurtadorRepository = getRepository(Encurtador);

  const rotaResponse = await encurtadorRepository.findOne({
    where: { url_short: rota },
  });

  if (!rotaResponse) {
    return response.status(404).send();
  }

  return response.redirect(rotaResponse.url);
});

routes.use('/encurtador', encurtadorRouter);

export default routes;
