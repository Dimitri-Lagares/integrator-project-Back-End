const connection = require('../../../../config/connection');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config()

exports.getFormData = (req, res)=>{
    const sql = 'SELECT * FROM form'
    connection.query(sql, (error, rows)=>{
        if (error) {
            res.json(error)
        } else {
            res.json(rows)
        }
    })
}


exports.sendForm = async (req, res)=>{
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

exports.updateForm = (req, res)=>{
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

exports.deleteForm = (req, res)=>{
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

exports.addUser = async (req, res)=>{
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

exports.auth = async (req, res)=>{
    const {email, password: inPassword} = req.body;
    const secretKey = process.env.SECRET_AUTH
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