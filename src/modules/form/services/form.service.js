import connection from '../../../../config/connection.js';
import bcrypt from 'bcrypt';
import { config } from 'dotenv';

config()

const getFormData = (req, res)=>{
    const sql = 'SELECT * FROM "integrator-project".form'
    connection.query(sql, (error, result)=>{
        if (error) {
            res.send(error)
        } else {
            res.json(result.rows)
        }
    })
}

const updateForm = (req, res)=>{
    const { name, email, phone, request, comment } = req.body;
    const {id} = req.params;

    const sql = `UPDATE "integrator-project".form SET name = '${name}', email='${email}', phone='${phone}', request='${request}', comment='${comment}' WHERE id = '${id}'`
    connection.query(sql, (error, rows)=>{
        if (error) {
            res.send(error)
        } else {
            res.send("Item updated succesfully")
        }
    })
}

const deleteForm = (req, res)=>{
    const {id} = req.params;

    const sql = `DELETE FROM "integrator-project".form WHERE id = '${id}'`
    connection.query(sql, (error, rows)=>{
        if (error) {
            res.send(error)
        } else {
            res.send("Item deleted succesfully")
        }
    })
}

const addUser = async (req, res)=>{
    const {email, password} = req.body;
    const passwordHash = await bcrypt.hash(password, 10)

    const sql = `INSERT INTO "integrator-project".auth (email, password) VALUES ('${email}', '${passwordHash}')`
    connection.query(sql, (error, rows)=>{
        if (error) {
            res.send(error)
        } else {
            res.send('Added succesfully')
        }
    })
}

export default { getFormData, updateForm, deleteForm, addUser }