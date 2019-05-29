const port = process.argv[2]
const filepath = process.argv[3]
const express = require('express')
const app = express()

app.use(express.static(filepath))

app.listen(port)