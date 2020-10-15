const {userService} = require('../services')
let md5 = require('md5');

let validateUser = async (req,res,next) => {
    try{
        let result
        let username = req.body.username;
        let password = req.body.password;
        
        if(username && password){
            result = await userService.validateUser(username,md5(password));
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
    validateUser   
}