const {inventoryService} = require('../services')


let getProducts = async (req,res,next) => {
    try{
        let result
        if(req.params.orgID){
            result = await inventoryService.getProducts(req.params.orgID,req.query.pid)
            res.status(200).send(result)
        }
        else {
            res.status(500).send('Invalid Request')
        }
    } catch (err) {
        next(err)
    }
}

let addProducts = async (req,res,next) => {
    try{
        let result
        if(req.body && req.body.orgID){
            result = await inventoryService.addProducts(req.body)
            res.status(200).send(result)
        }
        else {
            res.status(500).send('Invalid Request')
        }
    } catch (err) {
        next(err)
    }
}

let updateProducts = async (req,res,next) => {
    try{
        let result
        console.log(req.body);
        if(req.body){
            result = await inventoryService.updateProducts(req.body)
            res.status(200).send(result)
        }
        else {
            res.status(500).send('Invalid Request')
        }
    } catch (err) {
        next(err)
    }
}

let deleteProducts = async (req,res,next) => {
    try{
        let result
        console.log(req.body);
        if(req.body){
            result = await inventoryService.deleteProducts(req.body)
            res.status(200).send(result)
        }
        else {
            res.status(500).send('Invalid Request')
        }
    } catch (err) {
        next(err)
    }
}



// exporting all controller functions
module.exports = {
    getProducts,
    addProducts,
    updateProducts,
    deleteProducts      
}