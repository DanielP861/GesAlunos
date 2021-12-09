
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
    let nome = document.getElementById('nome')
    
    let rua = document.getElementById('rua')

    let numero = document.getElementById('numero')

    let email = document.getElementById('email')

    let tel = document.getElementById('tel')

    let nascimento = document.getElementById('nascimento')

    let tipo = document.getElementById('tipo')
    

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