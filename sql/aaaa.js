const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "dbNotasFiscaisTeste"
});

async function fetchData() {
  return new Promise((resolve, reject) => {
    con.connect(function(err) {
      if (err) return reject(err);
      con.query("SELECT nome, precoUnidade, quantidade, precoTotal FROM tbProdutos;", (err, result, fields) => {
        if (err) return reject(err);
        const a = result.map(row => ({ ...row }))[1];
        resolve(a);
      });
    });
  });
}

(async () => {
  try {
    const a = await fetchData();
    console.log(a);
  } catch (err) {
    console.error(err);
  } finally {
    con.end();
  }
})();
