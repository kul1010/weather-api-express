const config = require("../config")
const sql = require("mysql")
let con;
if(process.env.NODE_ENV==='production'){
     con = config.clearDBURL;
}else{
     con = sql.createConnection({
        host:config.MySQL.HOST,
        user:config.MySQL.USER,
        password:config.MySQL.PASSWORD,
        database:config.MySQL.DB
    })

}
console.log(con,'yyyy',process.env.NODE_ENV)

con.connect(error=>{
    if(error) throw error;
    console.log("Successfully connected to database")
})
module.exports = con;