const {readFileSync} = require('fs');
const load=()=>JSON.parse(readFileSync('data.json')); // read the json file and parsing it as an object/ 
module.exports ={load} // remote method//

// const page=()=>fs.readFileSync(path.join(__dirname, 'index.html'),'utf-8')
// module.exports ={page}