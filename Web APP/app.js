const express = require("express")
const app = express()
const port = 5000
const https = require("https")




/* 
4a31ef683d56f0c346bb510ab263c875
https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric
*/

app.get("/", (req, res)=>{
    const URL = "https://api.openweathermap.org/data/2.5/weather?q=istanbul&appid=4a31ef683d56f0c346bb510ab263c875&units=metric"
    https.get(URL, function(response){
        response.on("data", (d) =>{
            const weatherData = JSON.parse(d)
            const temp = weatherData.main.temp
            const weatherDescription = weatherData.weather[0].description
            const icon = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
            res.write(`<h1>The temperature in Istanbul is ${temp} celsius degrees</h1>`)
            res.write(`<img src="${icon}">`)
            res.write(`<p>The weather is currently ${weatherDescription}</p>`)
            res.send()
        })
    })
    
})




app.listen(port, ()=>{
    console.log(`http://127.0.0.1:${port}`)
})