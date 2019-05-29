var express = require('express')
var bodyParser = require('body-parser')
var app = express()    
app.use(bodyParser.urlencoded({extended: false}))
app.post('/form', function(req, res) {
  res.send(req.body.str)
})   
app.listen(process.argv[2])