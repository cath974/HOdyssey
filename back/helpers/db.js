const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Pouet974+',
  database : 'homerdb'
});
module.exports  =  connection;