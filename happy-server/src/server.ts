import express, { response } from 'express';

import './database/connection';

// incializando app express, para lidar com rotas da aplicação
const port = 3333;
const app = express();

// habilitando uso do json
app.use(express.json());

app.get('/users', (request, response) => {
  return response.json({ message: 'hello' });
});

app.listen(port);
console.log(`Servidor executando na porta ${port}`);
// backend executando em localhost:3333

/**
 * Rota = conjunto
 * Recurso = usuario
 *
 * Métodos HTTP: GET, POST, PUT, DELETE
 *
 * GET: Buscar uma informação (lista, itens)
 * POST: Criando uma informação nova
 * PUT: editando uma informação
 * DELETE: deletando uma informação
 *
 * Parâmetros:
 *
 * Query Params: http://localhost:3333/users?search=fulano
 * Route Params: http://localhost:3333/users/1 (identificar um recurso)
 * Body: http://localhost:3333/users (Corpo da requisição)
 *
 */

// app.get('/users/:id', (req, res) => {
//   // query paramns
//   console.log(req.query);
//   // route params
//   console.log(req.params);
//   // body
//   console.log(req.body);

//   return res.json({ message: 'hello' });
// });

/**
 * Formas de acessar banco de dados
 *
 * Driver nativo: SQL
 * Query Builder: Knex
 * ORM (Objecr Relation Mapping): cada elemendo do db é uma instancia de uma classe referente a ele no app
 *
 */
