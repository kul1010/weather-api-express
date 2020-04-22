const config = require("../config")
const sql = require("mysql")

const con = sql.createConnection({
    host:config.MySQL.HOST,
    user:config.MySQL.USER,
    password:config.MySQL.PASSWORD,
    database:config.MySQL.DB
})

con.connect(error=>{
    if(error) throw error;
    console.log("Successfully connected to database")
})
module.exports = con;