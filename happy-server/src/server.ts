import express, { response } from 'express';
import path from 'path';
import 'express-async-errors';

// connectando com o db
import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';

// incializando app express, para lidar com rotas da aplicação
const port = 3333;
const app = express();

// habilitando uso do json
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

app.listen(port);
console.log(`Servidor executando na porta ${port}`);

// backend executando em localhost:3333
