const express = require('express')
const connection = require('../dbconnection')
const inserirAlunosRoutes = express.Router()

inserirAlunosRoutes.post('/inserirAlunos',(req,res)=>{
    console.log(res.body)
    
  })

  module.exports = inserirAlunosRoutes