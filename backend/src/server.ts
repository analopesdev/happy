// Express na  requisição e a resposta
import express from 'express'

const app = express();

// Rota = conjunto 
// Recurso = usuário 

// Método HTTP = GET, POST, PUT, DELETE
// Parâmetros

// GET = Buscar uma informação
// POST = Criando uma informação nova
// PUT = Editando uma informação 
// DELETE = Deletando uma informação

app.get('/', (req, res) => {
  res.json({message: 'Hello World'});
})

app.listen(3333)
