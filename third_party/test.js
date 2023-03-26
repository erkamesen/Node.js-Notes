// SIMPLE EXPRESS APP

var express = require("express")

var app = express()
var port = 5000;

app.get("/", (req, res)=>{
    res.send("<h1>Hello World</h1>")
})



app.listen(port)

// Hello World on https://127.0.0.1:5000