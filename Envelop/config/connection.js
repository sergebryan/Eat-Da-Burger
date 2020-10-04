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
        database: "yfxus0o67n791ci5",
        host: "sm9j2j5q6c8bpgyq.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        port: 3306,
        user: "kd7o8to8un3ta6uj",
        password: "y7exv3zds9hxufg3"
    });
};

// Make mysqlConnection.
mysqlConnection.connect();

// This line is used for exporting the connection
module.exports = mysqlConnection;
