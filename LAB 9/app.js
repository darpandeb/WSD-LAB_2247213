const http = require('http');
const {load}= require('./data.js');
// const {page} = require('.data.js');
const express = require('express');
const app = express();
const PORT = 3022;
const cors = require('cors');
app.use(cors(
    {
        origin: "*"
    }
));
app.get('/',(req, res) => {
    res.send('<h1>Landing Page</h1><h3>Hello from nodeJs</h3>');
})
// get request//
app.get('/data',(req,res)=>
{
    res.send(load());
})

// listen to PORT//
app.listen(PORT,()=>
{
    console.log(`Hello World! Server is listening at ${PORT}`);
});