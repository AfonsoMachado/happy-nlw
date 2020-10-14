import express, { response } from 'express';

// connectando com o db
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
