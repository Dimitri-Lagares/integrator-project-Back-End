import connection from '../../../../config/connection.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { config } from 'dotenv';
import passport from 'passport';

config()

const auth = async (req, res)=>{
    const {email, password: inPassword} = req.body;
    const secretKey = process.env.SECRET_AUTH
    const credentials ={
        email: email,
        password: inPassword
    }
    const sql = `SELECT email, password FROM "integrator-project".auth WHERE email = '${email}'`
    
    connection.query(sql, async (error, rows)=>{
        console.log(rows);
        if (error) {
            res.json(error)
        } else {
           if (rows.length) {
            const {password} = rows[0]
            const passwordIsCorrect = await bcrypt.compare(inPassword, password)
            const token = jwt.sign(credentials, secretKey)
            if (passwordIsCorrect) {
                res.json({
                    email: rows[0].email,
                    token: token
                })
            }else{
                res.json("Wrong password")
            }            
           } else {
            res.json("Wrong email")
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
            res.json({status: 200, message: 'Information sended succesfully'})
        }
    })
}

export default { sendForm, auth }