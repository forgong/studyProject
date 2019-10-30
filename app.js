const express = require('express');
const app = express();

const indexRouter = require('./routes/index');
const gameRouter = require('./routes/game');
const bodyParser = require('body-parser');
const sessionParser = require('express-session');

const mysqlStroe = require('express-mysql-session')(sessionParser);
const dbOption = require('./config/db.json')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(sessionParser({
    secret: 'abcdefghijklmnopqrstuvwxyz',
    resave: false,
    saveUninitialized: true,
    store: new mysqlStroe(dbOption)
}));

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs')

app.use('/', indexRouter);
app.use('/game', gameRouter);

app.listen(3000, function(){
    console.log('Server start: port 3000');
});