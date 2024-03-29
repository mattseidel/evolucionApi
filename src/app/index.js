var express = require('express')
var app = express()
var morgan = require('morgan')
var client = require('../routes/client')
var evolution = require('../routes/evolution')
var parser = require('body-parser')
var user = require('../routes/user')

app.use(morgan('dev'))
app.use(parser.json())
app.use(parser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.set('port', '2500')

app.use('/client', client)
app.use('/evolution', evolution)
app.use('/user', user)

app.listen(app.get('port'), () => {
    console.log('listening on port ', app.get('port'))
})