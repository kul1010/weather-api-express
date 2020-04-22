require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser")


const port = process.env.PORT || 5000;

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    console.log("Hello");
    
})

require("./App/routes")(app);

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})

