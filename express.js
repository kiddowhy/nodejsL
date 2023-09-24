
const express = require('express')
const fs = require('fs')
 
//fs.readFile('./data/jsonDataOut.json', 'utf-8', (err, jsonString) => {
//    if (err) console.log(err)
//    else console.log(jsonString)
//    })

const app = express()
var jsonDFC 
app.use(express.json())

app.get('/home', (req, res) => {
    res.sendFile("index.html", { root:__dirname
        })

})

app.post("/datainfo", (req, res) => { 
    console.log(req.body)
    fs.writeFile('./data/jsonDataIn.json',JSON.stringify (req.body), (err) => {
        if (err) console.log(err)
    })

})
app.listen(4000, () => console.log("server on"))
