// NodeJS Code//

console.log("Hello world!");
var port = 3033;
var host = 'localhost';
var http = require('http');
var fs = require('fs'); // fs : file system//
var path = require('path');
// industry medthod to write code//
var server = http.createServer(function(req, res)
{
   res.writeHead(300,{'Content-Type': 'text/html'});
   var url = req.url;
   if(url=='/')
   {
    // readFileSync does the request response activity in a synchronous way//
   // readFile does it  in a asynchronous way//
    fs.readFile(path.join(__dirname, 'index.html'),'utf-8',(err,data)=>
    {
        if(err)
        {
            throw err;
        }
        res.end(data);
    })
   }
   else if(url=='/about')
   {
    // readFileSync does the request response activity in a synchronous way//

    fs.readFile(path.join(__dirname, 'about.html'),'utf-8',(err,data)=>
    {
        if(err)
        {
            throw err;
        }
        res.end(data);
    })
   }
   else if(url=='/contact')
   {
    // readFileSync does the request response activity in a synchronous way//

    fs.readFile(path.join(__dirname, 'contact.html'),'utf-8',(err,data)=>
    {
        if(err)
        {
            throw err;
        }
        res.end(data);
    })
   }

   //res.end('<h1>Message From Server </h1>')

});
// () => arrow function to declare a method//
server.listen(port,host,()=>
{
    console.log(`Server listening on port number :  ${port}`);
});


// basis create server function//
/*http.createServer(function(req, res)
{
    res.write("Christ MCA");
    res.end();
}).listen(3033)*/


