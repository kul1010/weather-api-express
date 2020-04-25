const config = require("../config")
const sql = require("mysql")

if(process.env.NODE_ENV==='production'){
    let con = config.clearDBURL;
}else{
    let con = sql.createConnection({
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