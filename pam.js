const port = process.argv[2]

const express = require('express')
const app = express()

app.put('/message/:id', (req,res) => {
    let id = req.params.id
    let ans = require('crypto').createHash('sha1').update(new Date().toDateString() + id).digest('hex')
    res.end(ans)
})

app.listen(port)