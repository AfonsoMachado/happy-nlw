import express, { response } from 'express';
import path from 'path';
import cors from 'cors';
import 'express-async-errors';

// connectando com o db
import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';

// incializando app express, para lidar com rotas da aplicação
const port = 3333;
const app = express();

// habilitando uso do json
// cors libera acesso ao server por outros dominios
app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

app.listen(port);
console.log(`Servidor executando na porta ${port}`);

// backend executando em localhost:3333
