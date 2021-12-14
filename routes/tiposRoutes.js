const express = require('express')
const path = require('path')
const app = express()
const connection = require('../dbconnection')

const tiposRoute = express.Router()

tiposRoute.get('/',(req, res)=>{
    connection.query('SELECT * FROM tipos',(err,result)=>{
      if(err)
      res.json('ocoreu um polbelme...')
      else{
        res.json(result)
      }
  
    })
  })

  module.exports = tiposRoute