const port = process.argv[2]
const file = process.argv[3]

const express = require('express')
const app = express()
const fs = require('fs')

app.get('/books', (req,res) => {
    fs.readFile(file, (err,readedFile) => {
        if(err){console.error(err)}
        let obj = JSON.parse(readedFile)
        res.json(obj)
    })
})

app.listen(port)