// This file is ORM
// ORM is object relational mapping
// This file helps in performaing actions to databse through the applciation

// Import the connection object
const mysqlConnection = require("../config/connection.js");

// Craete a promise for executing Orm Query
async function mysqlPromise(mysqlQuery){
    // This is promise for Orm
    return new Promise ((resolve,reject)=>{
        // Query String is passed - this is actual qyery to be executed
        mysqlConnection.query(mysqlQuery, (err,result)=>{
                if(err){
                    reject(err);
                }
                else{
                    resolve(result);
                }
        });
    });
}

let objectRelationalMapper = {

    //Functions are mde according to the given file in the same order

    // This query will select all the data from table
    selectAll: function(tabelName){
        const mysqlQuery = " SELECT * FROM " +tabelName+" ;";
        return mysqlPromise(mysqlQuery);
    },

    // This query wil insert Single Burger
    insertOne: function(tabelName,columnName,columnValue){
        const mysqlQuery = " INSERT INTO "+tabelName+" ("+columnName+") VALUES "+" ('"+columnValue+"');";
        return mysqlPromise(mysqlQuery);
    },

    // This query will update the burger - Making devour 1
    updateOne: function(tabelName,columnName,columnValue,pKey,keyValue){
        const mysqlQuery = " UPDATE "+tabelName+" SET "+columnName+" = "+columnValue+" WHERE "+pKey+" = "+keyValue+" ;"
        return mysqlPromise(mysqlQuery);
    }
}
// Export the objectRelationalMapper object for the model (burger.js).
module.exports = objectRelationalMapper;