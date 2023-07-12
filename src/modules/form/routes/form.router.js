const express = require('express')
const form = require('../services/form.service')

const router = express.Router()

router.get('/show-data', form.getFormData)
router.put('/update-item/:id', form.updateForm)
router.delete('/delete-item/:id', form.deleteForm)
router.post('/add-user', form.addUser)

module.exports = router