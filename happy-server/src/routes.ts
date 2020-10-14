import { Router } from 'express';
import { getRepository } from 'typeorm';
import Orphanage from './models/Orphanage';

const routes = Router();

routes.post('/orphanages', async (request, response) => {
  // capturando dados enviados
  const {
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekend,
  } = request.body;

  const orphanagesRepository = getRepository(Orphanage);

  // criando um novo orfanato, deixando pré criado
  const orphanage = orphanagesRepository.create({
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekend,
  });

  // salvando no db
  await orphanagesRepository.save(orphanage);

  return response.status(201).json(orphanage);
});

export default routes;
