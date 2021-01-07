const states = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'];

function selecionandoEstados() {
  for (let i = 0 ; i < states.length; i +=1){
  let seleciona = document.getElementById('states')
    let opcao = document.createElement('option')
    seleciona.appendChild(opcao).innerText = states[i]
    seleciona.appendChild(opcao).value.opcao = states[i]

  }

}

selecionandoEstados(); 

