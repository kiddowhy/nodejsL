
const express = require('express')

var fs = require('fs')

let jsonDataVar = JSON.parse(fs.readFileSync('./data/jsonDataIn.json', 'utf-8'))

const app = express()

app.use(express.json())

app.get('/home', (req, res) => {
    res.sendFile("index.html", { root:__dirname
        })

})

app.post("/datainfo", (req, res) => { 
    console.log(req.body)
})

app.listen(4000, () => console.log("server on"))
