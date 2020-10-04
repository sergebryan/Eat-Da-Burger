// This file is used to connect the node application to Mysql
// Mysql is running on port 3306
// Default user is root with no password
// database name is burger_db

// Below line is for importing the mysql library
let mysql = require("mysql");

let mysqlConnection;

if (process.env.JAWSDB_URL) {
    mysqlConnection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    mysqlConnection = mysql.createConnection({
        database: "burgers_db",
        host: "localhost",
        port: 3306,
        user: "root",
        password: "Prosper@2020"
    });
};

// Make mysqlConnection.
mysqlConnection.connect();

// This line is used for exporting the connection
module.exports = mysqlConnection;
