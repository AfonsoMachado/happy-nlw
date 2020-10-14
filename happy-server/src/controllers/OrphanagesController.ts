import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import orphanageView from '../views/orphanages_view';

import Orphanage from '../models/Orphanage';
import orphanages_view from '../views/orphanages_view';

export default {
  // Listando orfanatos
  async index(request: Request, response: Response) {
    const orphanagesRepository = getRepository(Orphanage);

    const orphanages = await orphanagesRepository.find({
      relations: ['images'],
    });

    return response.json(orphanageView.renderMany(orphanages));
  },

  // Listando orfanatos por indice
  async show(request: Request, response: Response) {
    const { id } = request.params;

    const orphanagesRepository = getRepository(Orphanage);

    const orphanage = await orphanagesRepository.findOneOrFail(id, {
      relations: ['images'],
    });

    return response.json(orphanageView.render(orphanage));
  },

  async create(request: Request, response: Response) {
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

    // é um array de arquivos
    const requestImages = request.files as Express.Multer.File[];
    const images = requestImages.map((image) => {
      return { path: image.filename };
    });

    // criando um novo orfanato, deixando pré criado
    const orphanage = orphanagesRepository.create({
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekend,
      images,
    });

    // salvando no db
    await orphanagesRepository.save(orphanage);

    return response.status(201).json(orphanage);
  },
};
