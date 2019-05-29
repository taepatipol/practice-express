const port = process.argv[2]

const express = require('express')
const app = express()

app.get('/search', (req,res) => {
    const querys = req.query
    res.send(querys)
})

app.listen(port)