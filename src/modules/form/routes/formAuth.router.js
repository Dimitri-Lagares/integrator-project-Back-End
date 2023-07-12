const express = require('express')
const form = require('../services/form.service')

const router = express.Router()

router.post('/login', form.auth)
router.post('/send-data', form.sendForm)

module.exports = router