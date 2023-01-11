const mysql = require('mysql2');


const con = mysql.createConnection({

    host:'localhost',
    user:'root',
    password:'admin',
    database:'infosys'
});

con.connect(function(err) {
    if (err) throw err;
    console.log('Connection established');
});

module.exports.con = con;