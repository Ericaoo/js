function ver() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente!') 
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade} anos.`
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gen = 'Homem'
            if (idade >= 0 && idade < 12) {
                img.setAttribute('src', 'bebe-m.jpg')
            } else if (idade < 21) {
                {
                img.setAttribute('src', 'jovem-m.jpg')
                }
            } else  if (idade < 55) {
                img.setAttribute('src', 'adulto-m.jpg')
            } else {
                img.setAttribute('src', 'idoso-m.jpg')
            }
        } else if (fsex[1].checked) {
            gen = 'Mulher'
            if (idade >= 0 && idade < 12) {
                img.setAttribute('src', 'bebe-f.jpg')
            } else if (idade < 21) {
                {
                img.setAttribute('src', 'jovem-f.jpg')
                }
            } else  if (idade < 55) {
                img.setAttribute('src', 'adulto-f.jpg')
            } else {
                img.setAttribute('src', 'idoso-f.jpg')
            }
    }
    if (fsex[0].checked) {
        var artigo = 'Um homem'
    } else {
        var artigo = 'Uma mulher'
    }
    res.style.textAlign = 'center'
    res.innerHTML += `<p>${artigo} de ${idade} anos.</p>`
    res.appendChild(img)
}
}