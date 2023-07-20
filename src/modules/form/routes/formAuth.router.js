import express from 'express'
import auth from '../services/auth.service.js'

const router = express.Router()

router.post('/login', auth.auth)
router.post('/send-data', auth.sendForm)

export default router