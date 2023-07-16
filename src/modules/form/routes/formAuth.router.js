import express from 'express'
import form from '../services/form.service.js'

const router = express.Router()

router.post('/login', form.auth)
router.post('/send-data', form.sendForm)

export default router