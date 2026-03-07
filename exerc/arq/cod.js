function carregar() {
    var msg = window.document.getElementById('msg') 
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}h${min}min.`
    if (hora >= 5 && hora < 12) {
        img.src = '../doc/manha.jpg'
    } else if (hora >= 12 && hora < 18) {
        img.src = '../doc/tarde.jpg'
    } else {
        img.src = '../doc/noite.jpg'
    }

    if (hora >= 5 && hora < 12) {
        document.body.style.background = '#4acc2a'
    } else if (hora >= 12 && hora < 18) {
        document.body.style.background = '#ca7200'
    } else {
        document.body.style.background = '#2f32c5'
    }
}
