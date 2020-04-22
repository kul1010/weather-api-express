module.exports = app =>{
    const apiData = require("../controllers/api.controller")
    app.get("/list",apiData.getAPIData)
}