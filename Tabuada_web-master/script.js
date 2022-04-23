function tabuada(){
  let num = document.getElementById('txti')
  let tab = document.getElementById('seltab')
  if(num.value.length == 0){
    window.alert('Por favor, digite novamente')
  } else{
    let n = Number(num.value)
    let c = 1
    tab.innerHTML = '' //limpar a tabuada para uma proxima consulta
    while(c <= 10){
      let item = document.createElement('option') //para escrever no select
      item.text = `${n} x ${c} = ${n*c}`
      item.value = `tab${c}` //saber qual o item na tabuada foi selecionado muito usado em php
      tab.appendChild(item) //adicionando um elemento filho para tabuada
      c++
    }
  }
}
