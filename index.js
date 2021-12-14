const express = require('express')
const path = require('path')
const app = express()

 
app.use(express.static('./public'))

app.use(express.urlencoded({extended: true}));
app.use(express.json({extended: false}));

//Rotas para os pedidos.
app.use('/',require('./routes/mainRoutes'))

app.use('/navbar',require('./routes/navbarRoutes'))
 
app.use('/tipos',require('./routes/tiposRoutes'))

app.use('/inserirAlunos', require('./routes/inserirAlunosRoutes'))

const port = 3000

app.listen(port, () => {
    console.log(`Listenning on port ${port}`)
})
