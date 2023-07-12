const express = require('express')
const form = require('../src/modules/form/routes/form.router')
const formAuth = require('../src/modules/form/routes/formAuth.router')
const passport = require('passport')
require('../utils/auth/index')

const routers =(app)=>{
    const baseRoute = express.Router()
    app.use(express.static('public'))
    app.use('/', baseRoute)
    baseRoute.use('/auth', formAuth)
    baseRoute.use('/form', passport.authenticate('jwt', {session: false}), form)
}

module.exports = routers