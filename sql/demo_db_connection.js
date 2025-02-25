var mysql = require('mysql');
const { resolve } = require('path');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "dbNotasFiscaisTeste"
});

let a;

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT nome,precoUnidade,quantidade,precoTotal FROM tbProdutos;", (err, result, fields)=> {
        if (err) throw err;
        a=result.map(row=>({...row}))[1];
        resolve(a);
        //console.log(result.map(row=>({...row}))[1]);
    });
});

(async () => {
    try {
      const a = await fetchData();
      console.log(a);
    } catch (err) {
      console.error(err);
    } finally {
      con.end(); // Fechar a conexão
    }
  })();

console.log(a);