const express = require('express')
const inventoryRoute = express.Router()
const {inventoryController} = require('../controller')

inventoryRoute.get('/product/:orgID',inventoryController.getProducts)
inventoryRoute.post('/product/create',inventoryController.addProducts)
inventoryRoute.post('/product/update',inventoryController.updateProducts)
inventoryRoute.post('/product/delete',inventoryController.deleteProducts)


module.exports =  {
    inventoryRoute
}
