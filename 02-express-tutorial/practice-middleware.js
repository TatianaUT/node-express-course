const express = require('express')
const app = express()

const consoleLog = (req, res, next)=>{
  console.log(req)
  next()
}

module.exports = consoleLog
