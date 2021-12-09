const { text } = require("express")

function initForm(){
    getNavbar()
    getTipos()
}

function getTipos(){
    const tipo = document.getElementById('tipo')
    fetch('http://localhost:3000/tipos')
    .then(res=> res.json())
    .then(data=> {
        tipo.innerHTML += `<option selected>Escolha um tipo.../option>`
        for(i in data){
            let op = 
            `<option value"${data[i].idtipo}">${data[i].designacao}</option>`
            tipo.innerHTML += op
        }
    })
    .catch((err)=>{
        alert('Errro no pedido...')
    })

}

function adicionar(){
    let nome = document.getElementById('nome').value
    
    let rua = document.getElementById('rua').value

    let numero = document.getElementById('numero').value

    let email = document.getElementById('email').value

    let tel = document.getElementById('tel').value

    let nascimento = document.getElementById('nascimento').value

    let tipo = document.getElementById('tipo').value
    
    let objeto = {

        nomeutilizador: nome,

        moradorua:rua,

        moradanumero: numero,

        datanacimento: nascimento,

        telemovel: tel,

        email: email,

        idtipo: tipo

    }

    let objetoJSON = JSON.stringify(objeto)
    

    const options ={
        method: 'POST',
        headers:{
            'Content-type': 'application/json'
        },

        body : objetoJSON

    }
    
    fetch('http://localhost.3000/inserirAlunos',options)
        .then(res => res.text())
        .then(text =>{
            alert(text)
    }) 

    .catch((err)=>{
            alert('Ocoreu um erro...')
    })

}

function getNavbar(){
    const nbar = document.getElementById('nbar')
    fetch('http://localhost:3000/navbar.html')
    .then(res => res.text())
    .then((html)=> [
        nbar.innerHTML += html
    ])
    .catch(function(err){
        alert('ocureu um erro')
    })
}