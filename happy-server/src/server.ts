import express, { response } from 'express';
import { getRepository } from 'typeorm';
import Orphanage from './models/Orphanage';

// connectando com o db
import './database/connection';

// incializando app express, para lidar com rotas da aplicação
const port = 3333;
const app = express();

// habilitando uso do json
app.use(express.json());

app.post('/orphanages', async (request, response) => {
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

  return response.json({ message: 'hello' });
});

app.listen(port);
console.log(`Servidor executando na porta ${port}`);

// backend executando em localhost:3333
