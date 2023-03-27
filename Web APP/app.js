const express = require("express")
const app = express()
const port = 5000
const https = require("https")




/* 
4a31ef683d56f0c346bb510ab263c875
https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric
*/

app.get("/", (req, res)=>{
    const URL = "https://api.openweathermap.org/data/2.5/weather?q=karabuk&appid=4a31ef683d56f0c346bb510ab263c875&units=metric"
    https.get(URL, function(response){
        response.on("data", (d) =>{
            const weatherData = JSON.parse(d)

            res.send(weatherData.weather[0].description)
        })
    })
    
})




app.listen(port, ()=>{
    console.log(`http://127.0.0.1:${port}`)
})