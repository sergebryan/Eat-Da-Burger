// This files uses the object relational mapper for the application and
let objectRelationalMapper = require("../config/orm.js");
// Strings to be used later in this file
let tableName = "burgers";
let columnName = "burger_name"
let devouredColumnName = "devoured";
// Burger function Mapper -- This willl be used in controller
let  burgerFunctionMapper = {

    selectAll: function(){
        return objectRelationalMapper.selectAll(tableName);
    },
    
    insertOne: function(bname){
        return objectRelationalMapper.insertOne(tableName, columnName,bname);
    },
    updateOne: function( burgerDevoured, burgerId){
        return objectRelationalMapper.updateOne(tableName,devouredColumnName, burgerDevoured,"id", burgerId);
    }
};
// Export the mapper
module.exports =  burgerFunctionMapper;