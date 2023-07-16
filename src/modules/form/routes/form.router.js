import express from 'express'
import form from '../services/form.service.js'

const router = express.Router()

router.get('/show-data', form.getFormData)
router.put('/update-item/:id', form.updateForm)
router.delete('/delete-item/:id', form.deleteForm)
router.post('/add-user', form.addUser)

export default router