const mysql = require('mysql');
const dbOption = require('../config/db.json')

var db = mysql.createConnection(dbOption);

db.connect();

module.exports = db;