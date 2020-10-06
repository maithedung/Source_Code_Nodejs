const express = require('express')

// Constants
const port = 8080
const host = '0.0.0.0'

// App
const app = express()
app.get('/', (req, res) => {
    res.send('cc')
})

app.listen(port, () => {
    console.log(`Running on http://${host}:${port}`)
})