module.exports = {
    MySQL:{
         HOST : process.env.HOST,
         USER : process.env.USER,
         PASSWORD : process.env.PASSWORD,
         DB  : process.env.DB
    },
    clearDBURL: process.env.DATABASE_URL,
    apiURL : process.env.API_URL 
 }