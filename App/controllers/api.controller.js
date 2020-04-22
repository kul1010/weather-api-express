const Axios = require('axios')
const config = require("../config")
const weather = require("../models/weather.model")
exports.getAPIData = async (req,res)=>{
    const response =  await Axios.get(config.apiURL);
    // console.log('ttt',response.data)
    if(response.data){
        // console.log('fsd',response.data);
        weather.saveData(response.data,(err,data)=>{
            if(err){
                console.log(`Error: ${err}`)
                res.status.send(500,`${err}`)
            }
            console.log(`Data saved successfully`)
        })
  }
  res.send({message:response.data})
}