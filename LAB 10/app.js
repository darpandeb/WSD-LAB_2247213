// Importing module
var mysql = require('mysql2')

var connection = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"Darpan10@",
	database : "darpandb"
})

// Connecting to database
connection.connect(function(err) {
	if(err){
	console.log("Error in the connection")
	console.log(err)
	}
	else{
	console.log(`Database Connected`)
	connection.query(`SHOW TABLES`,
	function (err, result) {
		if(err)
		console.log(`Error executing the query - ${err}`)
		else
		console.log("Result: ",result)
	})
	}
})
