var express = require('express')
var router = express.Router();
var pool = require('../db/dabase')

var database = new pool();

router.get('/', (req, res) => {
    database.query('select * from evolution').then(rows => {
        res.send(rows)
    })
})

router.get('/:id', (req, res) => {
    var id = req.params.id;
    database.query('select * from evolution where id = ?', id).then(rows => {
        res.send(rows)
    })
})

router.post('/', (req, res, next) => {
    var data = req.body
    database.query('insert into evolution set ?', data).then(rows => {
        res.send('se ha insertado satisfactoriamente')
    }).catch(err => {
        next(err)
    })
})

router.put('/:id', (req, res, next) => {
    var id = req.params.id
    var data = req.body
    database.query('update evolution set ? where id = ?', [data, id]).then(rows => {
        res.send('se ha modificado satisfactoriamente')
    }).catch(err => {
        next(err)
    })
})

router.delete('/:id', (req, res, next) => {
    var id = req.params.id
    database.query('delete from evolution where id = ?', id).then(rows => {
        res.send('se ha eliminado satisfactoriamente')
    }).catch(err => {
        next(err)
    })
})


module.exports = router;