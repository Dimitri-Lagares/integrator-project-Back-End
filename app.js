const express = require('express');
const routers = require('./router/index')
const cors = require('cors')
const app = express()


app.use(express.json())
app.use(cors())
routers(app)



module.exports = app