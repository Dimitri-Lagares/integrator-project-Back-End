const express = require('express');
const routers = require('./router/index')

const app = express()


app.use(express.json())

routers(app)



module.exports = app