var mysql      = require('mysql');
//db connection using env variable
require('dotenv').config();
//console.log(process.env)

var connection = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASSWORD,
  database : process.env.DB_NAME,
  port: process.env.DB_PORT,
  insecureAuth : true
});

let createTable = `create table if not exists user_profile(
  id int primary key auto_increment,
  title varchar(255)not null,
  completed tinyint(1) not null default 0
)`;

connection().query(createTable, (error, results, fields) => {
  if (error) throw error;
});
 
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
 
connection.end();