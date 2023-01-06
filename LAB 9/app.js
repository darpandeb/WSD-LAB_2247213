// defining the essential variables and modules//

const http = require('http');
const {load}= require('./data.js');
const express = require('express');
const app = express();
const PORT = 3022;
const cors = require('cors');
app.use(cors(
    {
        origin: "*"
    }
));
var path = require('path');
var data = load();
//console.log(data.data);
// filter out records whose age is greater than 25
checkUsers = data.data.filter(d => d.age >= 25);
//console.log(checkUsers);
app.use(express.static(__dirname + '/'));
// get request//
app.get('/',(req,res)=>
{
    res.sendFile(__dirname+'/index.html');
});
app.get('/data',(req,res)=>
{
    res.send(data.data);
});
app.get('/age25',(req,res)=>
{
    res.send(checkUsers);
});


// listen to PORT//
app.listen(PORT,()=>
{
    console.log(`Hello World! Server is listening at ${PORT}`);
});


