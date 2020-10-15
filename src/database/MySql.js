var mysql = require('mysql');
const {mysql_user,mysql_password,mysql_host,mysql_db} = require('../vars')

var connection = mysql.createConnection({
    host     : mysql_host,
    user     : mysql_user,
    password : mysql_password,
    database : mysql_db
});
   
connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    console.log('connected as id ' + connection.threadId);
  
    connection.query("SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'userauth'", function (err, result) {
      if(result.length == 0){
        var sql = "CREATE TABLE userauth (username VARCHAR(255) PRIMARY KEY, password VARCHAR(255) NOT NULL, name VARCHAR(255) NOT NULL,orgID INT NOT NULL, status VARCHAR(25))";
        connection.query(sql, function (err, result) {
          if (err) throw err;
          console.log("Table userauth created");
        });
      }else{
        console.log("userauth table already exists");
      }
    });
  
    connection.query("SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'inventory'", function (err, result) {
      if(result.length == 0){
        var sql = "CREATE TABLE inventory (productID INT PRIMARY KEY, productName VARCHAR(255) NOT NULL, productType VARCHAR(255) NOT NULL, quantity INT(25) NOT NULL, status VARCHAR(25) NOT NULL, created_by VARCHAR(225) NOT NULL, orgID INT(25) NOT NULL, updated_at TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW(), created_at TIMESTAMP NOT NULL DEFAULT NOW())";
        connection.query(sql, function (err, result) {
          if (err) throw err;
          console.log("Table inventory created");
        });
      }else{
        console.log("inventory table already exists");
      }
    });
  
  });
  
module.exports = connection;