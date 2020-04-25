const config = require("../config")
const sql = require("mysql")
let con;
if(process.env.NODE_ENV==='production'){
     con = sql.createConnection(config.clearDBURL);
}else{
     con = sql.createConnection({
        host:config.MySQL.HOST,
        user:config.MySQL.USER,
        password:config.MySQL.PASSWORD,
        database:config.MySQL.DB
    })

}

con.connect(error=>{
    if(error) throw error;
    console.log("Successfully connected to database")
})
module.exports = con;