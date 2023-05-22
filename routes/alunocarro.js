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
        res.status(200).send(result);
    });
});

module.exports = router;