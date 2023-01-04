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
var data = load();
//console.log(data.data);
// filter out records whose age is greater than 25
checkUsers = data.data.filter(d => d.age >= 25);
//console.log(checkUsers);

// get request//
app.get('/',(req,res)=>
{
    res.send('<h1>Landing Page</h1><h3>Hello from NodeJs</h3>');
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


