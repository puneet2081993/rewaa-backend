const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const {rewaa} = require('../../routes')
const errorHandler = require('../../middleware/errorHandler/errorHandler')

//body-parser for req and res
app.use(
    bodyParser.urlencoded({
      extended: true
    })
  )
app.use(bodyParser.json())
app.use(rewaa)

module.exports = {
    app
}