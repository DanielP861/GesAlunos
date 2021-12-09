
function initForm(){
    getNavbar()
    getTipos()
}

function getTipos(){
    const tipo = document.getElementById('tipo')
    fetch('http://localhost:3000/tipos')
    .then(res=> res.json())
    .then(data=> {
        tipo.innerHTML+= '<option selected>Open this select menu</option>'
        for(i in data){
            let op = 
            `<option value"${data[i].idtipo}">${data[i].disignacao}</option>`
            tipo.innerHTML += op
        }
    })
    .catch((err)=>{
        alert('Errro no pedido...')
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