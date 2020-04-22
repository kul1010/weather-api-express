const sql = require("./db")

const Weather = function(weather){
    this.temp_min = weather.temp_min;
    this.temp_max = weather.temp_max;
    this.temp = weather.temp;
}

Weather.saveData = (weather_data, result)=>{
    console.log('hhh',weather_data)
    sql.query("INSERT INTO weather_dtls SET temp_min=?, temp_max=?,temp=?",
    [weather_data.tempMin,weather_data.tempMax,weather_data.temp],
    (err,res)=>{
        if(err){
            console.log("error: ",err)
            result(err,null)
            return
        }
        console.log("Weather data saved : ",{id:res.insertId, ...weather_data})
        result(null,{id:res.insertId, ...weather_data})
    })
}

module.exports = Weather;