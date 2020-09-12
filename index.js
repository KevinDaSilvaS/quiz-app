const express = require('express')
const bodyParser = require('body-parser')
const loadRoutes = require('./routes/loadRoutes')

const app = express()
app.use(bodyParser.json())
loadRoutes(app);

app.listen(4738, (ok) => {
    if(!ok) console.log("Connected to localhost:4738")
})