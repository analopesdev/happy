import express from 'express';
// Fazer com que o servidor responda a conexão
import './database/connection'
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333)
