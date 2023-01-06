// Js script to write data on the json file on server side using Fs node  module
const fs = require("fs");
   

fs.readFile("data.json", function(err, data) {
      
    if (err) throw err;
   
    const users = JSON.parse(data);
      
});


  

const users = require("./data.json");

let user = {
    id:902130,
    name:"New User",
    location:"New Location",
    age:35,
    gender:"M",
    interest:"New Interest"
};

users.data.push(user);
   
fs.writeFile("users.json", JSON.stringify(users), err => {
     
    if (err) throw err; 
   
    console.log("Done writing"); 
});