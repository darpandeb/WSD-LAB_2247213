const {readFileSync} = require('fs');
const load=()=>JSON.parse(readFileSync('data.json')); // read the json file and parsing it as an object/ 
module.exports ={load} // remote method//