import {Strategy, ExtractJwt} from 'passport-jwt';
import { config } from 'dotenv';
const secretKey = process.env.SECRET_AUTH
const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: secretKey
}

config()

const JwtStrategy = new Strategy(options, (payload, done)=>{
    return done(null, payload)
})

export default JwtStrategy