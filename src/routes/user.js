var express = require('express')
var route = express.Router()
var db = require('../db/dabase')
var database = new db();
var jwt = require('jsonwebtoken')



route.post('/auth', (req, res, next) => {
    const username = req.body.username
    const password = req.body.password

    database.query('select * from user where username = ? and password = ? ', [username, password])
        .then(row => {
            if (row.length > 0) {
                var token = jwt.sign({ row }, 'mySecret')
                console.log(token);
                res.json({ token })
            }
        })
        .catch(err => {
            next(err)
        })
})

route.get('/', verifyIsLogged, (req, res) => {
    
    jwt.verify(req.token, 'mySecret', (err, data) => {
        if (err) {
            res.sendStatus(403)
        } else {
            res.json({
                data
            })
        }
    })
})

function verifyIsLogged(req, res, next) {
    const bearerHeader = req.headers['authorization']
    if (bearerHeader !== undefined) {
        req.token = bearerHeader.split(" ")[1];;
        next();
    }
    else {
        res.sendStatus(403)
    }
}


module.exports = route