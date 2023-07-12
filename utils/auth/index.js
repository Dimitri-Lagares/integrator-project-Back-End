const passport = require('passport');
const jstStrategy = require('./strategias/jwt.strategy')

passport.use(jstStrategy )