const express = require('express')
const app = express()

//  req => middleware => res

export const consoleLog = (req, res, next) => {
  console.log(req)
  next()
}