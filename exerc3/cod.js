function bot() {
var cmc = Number(document.getElementById('cmc').value)
var fim = Number(document.getElementById('fim').value)
var pas = Number(document.getElementById('pas').value)
var res = document.getElementById('res')
if (pas <= 0) {
    window.alert('Passo inválido. Passo min. 1.')
    return(pas = 1)
}




res.innerHTML = `🚩 `
for (cmc ; cmc < fim ; cmc += pas) {
    res.innerHTML += `${cmc} → `
}   res.innerHTML += `${fim}`
    res.innerHTML += `🏁`
    res.innerHTML += `<p>Contagem finalizada em ${cmc}! Sobra de ${cmc - fim} unidade(s).</p>`
}