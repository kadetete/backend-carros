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

router.post('/aluno', function(req, res) {
    const noAluno = req.body.noAluno;
    const matriculaAluno = req.body.matriculaAluno;

    const sql = `INSERT INTO aluno (noAluno, matriculaAluno) VALUES (?, ?)`;
    con.query(
        sql,
        [noAluno, matriculaAluno],
        function(erroComandoSQL, result, fields) {
            if (erroComandoSQL) {
                throw erroComandoSQL;
            }

            if (result.affectedRows > 0) {
                res.status(200).send('Registro incluído com sucesso');
            } else {
                res.status(400).send('Erro ao incluir registro');
            }
        }
    );
});

router.post('/carro', function(req, res) {
    const idCarro = req.body.idCarro;
    const marcaCarro = req.body.marcaCarro;
    const modeloCarro = req.body.modeloCarro;
    const anoCarro = req.body.anoCarro;
    const codigoEtiqueta = req.body.codigoEtiqueta;
    const validaCnh = req.body.validaCnh;
    const matriculaRel = req.body.matriculaRel;

    const sql = `INSERT INTO carro (idCarro, marcaCarro, modeloCarro, anoCarro, codigoEtiqueta, validaCnh, matriculaRel) VALUES (?, ?, ?, ?, ?, ?, ?)`;
    con.query(
        sql,
        [idCarro, marcaCarro, modeloCarro, anoCarro, codigoEtiqueta, validaCnh, matriculaRel],
        function(erroComandoSQL, result, fields) {
            if (erroComandoSQL) {
                throw erroComandoSQL;
            }

            if (result.affectedRows > 0) {
                res.status(200).send('Registro incluído com sucesso');
            } else {
                res.status(400).send('Erro ao incluir registro');
            }
        }
    );
});
module.exports = router;