// defining the essential variables//

const http = require('http');
const {load}= require('./test2.js');
const express = require('express');
const app = express();
const PORT = 3022;
const cors = require('cors');
app.use(cors(
    {
        origin: "*"
    }
));
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


