const express = require('express')
const path = require('path')
const app = express()


const navbarRoute = express.Router()

app.get('/'),(req, res)=>{
    res.sendFile(path.join(__dirname,'../public/navbar.html'))
  }


  module.exports = navbarRoute