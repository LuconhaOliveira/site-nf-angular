const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'dbnotasfiscais',
});

// Teste de conexão
db.connect(err => {
  if (err) {
    console.error('Erro ao conectar:', err);
  } else {
    console.log('Conectado ao MySQL');
  }
});

// Rota para pegar dados
app.get('/api/produto', (req, res) => {
  db.query(`SELECT * FROM tbprodutos INNER JOIN tbnotasprodutos ON tbprodutos.idProduto = tbnotasprodutos.idProduto WHERE tbnotasprodutos.idNota = ${req};`, (err, results) => {//ta errado essa porra
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
