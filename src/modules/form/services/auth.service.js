import connection from '../../../../config/connection.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { config } from 'dotenv';

config()
    
const auth = async (req, res)=>{
    const {email, password: inPassword} = req.body;
    const secretKey = process.env.SECRET_AUTH
    const credentials ={
        email: email,
        password: inPassword
    }
    const sql = `SELECT email, password FROM "integrator-project".auth WHERE email = '${email}'`

    connection.query(sql, async (error, result)=>{
        if (error) {
            res.send(error)
        } else {
           if (result.rows.length) {
            const {password} = result.rows[0]
            const passwordIsCorrect = await bcrypt.compare(inPassword, password)
            const token = jwt.sign(credentials, secretKey)
            if (passwordIsCorrect) {
                res.json({
                    email: result.rows[0].email,
                    token: token
                })
            }else{
                res.send("Wrong Password")
            }            
           } else {
            res.send("Wrong Email")
           }
            
        }
    })
}

const sendForm = async (req, res)=>{
    const { name, email, phone, request, comment } = req.body;

    const sql = `INSERT INTO "integrator-project".form ( name, email, phone, request, comment ) VALUES ('${name}', '${email}', '${phone}', '${request}', '${comment}')`
    connection.query(sql, (error, rows)=>{
        if (error) {
            res.json(error)
        } else {
            res.send('Information sended succesfully')
        }
    })
}

export default { auth, sendForm }