var http = require('http')
var fs = require('fs')
let jsonDataVar = JSON.parse( fs.readFileSync('./data/jsonData.json', 'utf-8'))

function onRequest(request, response) {
    console.log("request =" + request.url)
    response.writeHead(200, { "Context-Type": " application/json" })
    response.end(jsonDataVar) 
    console.log(jsonDataVar)
}

http.createServer(onRequest).listen(8088)
console.log("server on")