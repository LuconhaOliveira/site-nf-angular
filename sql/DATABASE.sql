CREATE DATABASE IF NOT EXISTS dbNotasFiscais;
USE dbNotasFiscais;

CREATE TABLE IF NOT EXISTS tbProdutos(
	idProduto INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    precoUnidade FLOAT(5,2)
);

CREATE TABLE IF NOT EXISTS tbNotasProdutos(
	id INT PRIMARY KEY AUTO_INCREMENT,
    idNota INT,
    idProduto INT,
    quantidade INT,
    precoFinal FLOAT(6,2)
);

CREATE TABLE IF NOT EXISTS tbNotasFiscais(
	idNota INT PRIMARY KEY AUTO_INCREMENT,
    precoTotal FLOAT(7,2),
    dataHora DATETIME
);

DELIMITER $
CREATE TRIGGER trInsertDataHoraNotasFiscais
BEFORE INSERT ON tbNotasFiscais FOR EACH ROW
BEGIN
	SET NEW.dataHora = NOW();
END$
DELIMITER ;