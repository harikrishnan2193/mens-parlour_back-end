const express = require('express')
const userController = require('../Controller/userContoller')

const router = new express.Router()

//register
router.post('/users/register',userController.register)

//login
router.post('/users/login',userController.login)


module.exports = router