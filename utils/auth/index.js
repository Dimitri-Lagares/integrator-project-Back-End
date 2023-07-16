import passport from 'passport';
import jstStrategy from './strategias/jwt.strategy.js';

passport.use(jstStrategy )