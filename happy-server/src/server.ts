import express from 'express';

// incializando app express, para lidar com rotas da aplicação
const port = 3333;
const app = express();

app.listen(port);
console.log(`Servidor executando na porta ${port}`);
// backend executando em localhost:3333
