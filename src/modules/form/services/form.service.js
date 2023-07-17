import connection from '../../../../config/connection.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { config } from 'dotenv';

config()

const getFormData = (req, res)=>{
    const sql = 'SELECT * FROM "integrator-project".form'
    connection.query(sql, (error, rows)=>{
        if (error) {
            res.json(error)
        } else {
            res.json(rows)
        }
    })
}


const sendForm = async (req, res)=>{
    const { name, email, phone, request, comment } = req.body;

    const sql = `INSERT INTO form ( name, email, phone, request, comment ) VALUES ('${name}', '${email}', '${phone}', '${request}', '${comment}')`
    connection.query(sql, (error, rows)=>{
        if (error) {
            res.json(error)
        } else {
            res.json({status: 200, message: 'Information sended succesfully'})
        }
    })
}

const updateForm = (req, res)=>{
    const { name, email, phone, request, comment } = req.body;
    const {id} = req.params;

    const sql = `UPDATE form SET name = '${name}', email='${email}', phone='${phone}', request='${request}', comment='${comment}' WHERE id = '${id}'`
    connection.query(sql, (error, rows)=>{
        if (error) {
            res.json(error)
        } else {
            res.json("Item updated succesfully")
        }
    })
}

const deleteForm = (req, res)=>{
    const {id} = req.params;

    const sql = `DELETE FROM form WHERE id = '${id}'`
    connection.query(sql, (error, rows)=>{
        if (error) {
            res.json(error)
        } else {
            res.json("Item deleted succesfully")
        }
    })
}

const addUser = async (req, res)=>{
    const {email, password} = req.body;
    const passwordHash = await bcrypt.hash(password, 10)

    const sql = `INSERT INTO auth (email, password) VALUES ('${email}', '${passwordHash}')`
    connection.query(sql, (error, rows)=>{
        if (error) {
            res.json(error)
        } else {
            res.json({status: 200, message: 'Added succesfully'})
        }
    })
}

const auth = async (req, res)=>{
    const {email, password: inPassword} = req.body;
    const secretKey = process.env.SECRET_AUTH || My_Secret_Key
    const credentials ={
        email: email,
        password: inPassword
    }
    const sql = `SELECT * FROM auth WHERE email = '${email}'`
    connection.query(sql, async (error, rows)=>{
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
                }).status(200)
            }else{
                res.json("Wrong password")
            }            
           } else {
            res.json("Wrong email")
           }
            
        }
    })
}

export default { getFormData, sendForm, updateForm, deleteForm, addUser, auth }