const express = require('express')
const userRoute = express.Router()
const {userController} = require('../controller')

userRoute.post('/user/login',userController.validateUser)

module.exports =  {
    userRoute
}
