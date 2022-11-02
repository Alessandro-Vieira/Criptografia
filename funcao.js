selecione = document.querySelector("#sel");
botao=document.querySelector('#btn')
codificar = document.querySelector("#codificar");
decodificar = document.querySelector("#decodificar");


//cifra de cesar
var letras=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

function cifraCesar() {
  if (codificar.checked) {
    msg = document.form.mensagem.value.toLowerCase()
    chave = parseInt(document.form.incremento.value)
    x = parseInt(chave)
    if(x<0){
      x1=x*(-1)
    }
    else{
      x1=x
    }
    crip = []

    for (i = 0; i < msg.length; i++) {
      if (msg[i] != ' ') {
        for (j = 0; j < letras.length; j++) {
          if (msg[i] == letras[j]) {
            crip[i] = letras[(j + x1) % letras.length]
            break
          }
        }
      }
      else {
        crip[i] = ' '
      }
    }
    document.form.resultado.value=crip.join('')
  }
  else if (decodificar.checked) {
    msg = document.form.mensagem.value.toLowerCase()
    chave = parseInt(document.form.incremento.value)
    x = parseInt(chave)
    casas=letras.length
    if(x<0){
      x1=x*(-1)
    }
    else{
      x1=x
    }
    crip = []
    
    for (i = 0; i < msg.length; i++) {
      if (msg[i] != ' ') {
        for (j = 0; j < letras.length; j++) {
          if (msg[i] == letras[j] && (j-x)>=0) {
            crip[i] = letras[(j - x1) % letras.length]
            break
          }
          else if((msg[i] == letras[j] && (j-x)<0)) {
            crip[i] = letras[((j - x) % letras.length)+parseInt(casas)]
            break
          }
        }
      }
      else {
        crip[i] = ' '
      }
    }
    document.form.resultado.value=crip.join('')
  }

}


//trocar o nome do botao

codificar.addEventListener('click', function(){
  if(decodificar.checked){
    botao.innerText='Decodificar Mensagem'
  }
  else{
    botao.innerText='Codificar Mensagem!'
  }
})

decodificar.addEventListener('click', function(){
  if(decodificar.checked){
    botao.innerText='Decodificar Mensagem!'
  }
  else{
    botao.innerText='Codificar Mensagem!'
  }
})

botao.addEventListener("click", function (event) {
  event.preventDefault();
  if (selecione.value === "cifrad") {
    resultado.innerText = cifraCesar();
  }
});