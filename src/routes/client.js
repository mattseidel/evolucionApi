var express = require('express')
var router = express.Router();
var pool = require('../db/dabase')

var database = new pool();

router.get('/', (req, res, next) => {
    database.query('SELECT * FROM client').then(rows => {
        res.send(rows)
    });
})

router.get('/:id', (req, res) => {
    var id = req.params.id
    database.query('select * from client', id).then(rows => {
        res.send(rows)
    })
})

router.post('/', (req, res, next) => {
    var data = req.body
    database.query('INSERT INTO  client set ?', data).then(rows => {
        res.send('se ha ingresado al usuario')
    }).catch(err => {
        next(err)
    })
})

module.exports = router;