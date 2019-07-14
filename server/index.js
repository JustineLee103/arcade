const express = require('express');
const path = require('path')
const app = express();
const morgan = require('morgan');

const bodyParser = require('body-parser')

app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api', require('./api'))

app.get('/', (req, res) => {
    res.send(`
    <html>
        <head>
            <title>My site</title>
        </head>
        <body>
            <h1>Hello World Hey hey! hello?</h1>
        </body>
    </html>
    `)
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });


app.use(function (err, req, res, next) {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
  });

module.exports = app