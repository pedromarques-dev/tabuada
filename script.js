function calcular(){
let num = document.getElementById('txtnum')
let tabuada = document.getElementById('fullTabuada')
if(num.value.length == 0){
    alert('[ERRO]Informe um numero')
} else {
    let n = Number(num.value)
    let c = 1

    tabuada.innerHTML = ''
    do{
        let resultado = n * c
        let item = document.createElement('option')
        item.setAttribute('size', '10')
        item.text = `${n} x ${c} = ${resultado}`
        item.value = `tab${c}`
        tabuada.appendChild(item)
        c++
    }while(c <= 10)
}
}