function tabuada() {

let num = document.getElementById('txtn')
let tab = document.getElementById('seltab')

if (num.value.length == 0 || Number(num.value) == 0) {
    window.alert('Digite um número válido!')
} else {
    let n = Number(num.value)
    let c = 1
    tab.innerHTML = ""

    for (c; c <= 10; c++)  {
        let item = document.createElement('option')
        item.text = `${n} x ${c} = ${n * c}`
        tab.appendChild(item)
    }
}
}