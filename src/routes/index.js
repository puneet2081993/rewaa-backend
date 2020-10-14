const express = require('express')
const rewaa = express()
const {inventoryRoute} = require('./inventoryRoute')

rewaa.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

rewaa.use(inventoryRoute)

module.exports = {
    rewaa
}