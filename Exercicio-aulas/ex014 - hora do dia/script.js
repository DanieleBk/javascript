function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var h1 = window.document.querySelector(h1)
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        document.body.style.background = '#7dabca'
        img.src = 'imagens/manha.jpg'
    } else if (hora >= 12 && hora <= 18) {        
        document.body.style.background = '#e7ae94'
        img.src = 'imagens/tarde.png'
    } else {
        document.body.style.background = '#7080da'
        img.src = 'imagens/noite.jpg'
    }
}