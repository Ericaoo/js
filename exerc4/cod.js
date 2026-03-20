function gerarTabuada() {
    var num = Number(document.getElementById('num').value);
    var tabuada = document.getElementById('tabuada')

    tabuada.innerHTML = ''
    for(let contador = 1; contador <= 10; contador++) {
    var res = contador * num;
    var item = document.createElement('option')
    item.text = `${num} x ${contador} = ${res}`
    tabuada.appendChild(item)
}
}
