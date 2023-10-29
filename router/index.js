import express from 'express'
import form from '../src/modules/form/routes/form.router.js'
import formAuth from '../src/modules/form/routes/formAuth.router.js'
import passport from 'passport'
import '../utils/auth/index.js'

const routers =(app)=>{
    const baseRoute = express.Router()
    app.use(express.static('public'))
    app.use('/', baseRoute)
    baseRoute.use('/auth', formAuth)
    baseRoute.use('/form', passport.authenticate('jwt', {session: false}), form)
}

export default routers
