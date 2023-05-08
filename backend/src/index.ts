import 'reflect-metadata';
import express from 'express';
import router from './routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use(router);

app.listen(8081, () => console.log('Iniciado'));