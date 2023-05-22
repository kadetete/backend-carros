const express = require('express');
const router = express.Router();
const mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dbentrada',
});

con.connect(function(erroConexao) {
    if (erroConexao) {
        throw erroConexao;
    }
});

router.get('/', function(req, res) {
    con.query('SELECT * FROM vwalunocarro', function(erroComandoSQL, result, fields) {
        if (erroComandoSQL) {
            throw erroComandoSQL;
        }

        if (result.lenght > 0) {
            res.status(200).send(result);
        } else {
            res.status(404).send('Não encontrado');
        }
    });
});

module.exports = router;