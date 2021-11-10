const express = require('express')
const app = express()
const port = 5000

app.set('view engine', 'pug')
app.set('views', process.cwd() + '/views')


app.get('/', (req, res) => {
    res.render("index")
})

app.get('/script.js', (req, res) => {
    res.sendFile(process.cwd() + "/script.js")
})


app.listen(process.env.PORT || port, () => {
    console.log('App listening on http://localhost:' + port)
})