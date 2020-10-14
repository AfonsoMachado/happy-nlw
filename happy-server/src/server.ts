import express, { response } from 'express';
import path from 'path';
import routes from './routes';

// connectando com o db
import './database/connection';

// incializando app express, para lidar com rotas da aplicação
const port = 3333;
const app = express();

// habilitando uso do json
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

app.listen(port);
console.log(`Servidor executando na porta ${port}`);

// backend executando em localhost:3333
