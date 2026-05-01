function contar (){
    var inicio = window.document.querySelector('input#inicio')
    var fim = window.document.querySelector ('input#fim')
    var passo = window.document.querySelector('input#passo')
    var res = window.document.querySelector('div#res')

    if (inicio.value.length == 0){
        res.innerHTML = 'Numero de <strong>início</strong> inválido'
    } else if (fim.value.length == 0){
        res.innerHTML = 'Verifique o número <strong>Fim</strong>'
    /* } else if(passo.value.length == 0){
        window.alert ('Passo inválido. Considerando PASSO 1')*/
        
    } else {
        res.innerHTML =('Calculando: <br>')
        let i = Number (inicio.value)
        let f = Number (fim.value)
        let p = Number (passo.value)
        if (p<=0) {
            window.alert ('Passo inválido, considerendo: Passo 1')
            p=1

        }
        if (i < f) {
            //contagem crescente
            for (let c = i; c<= f; c += p){
                res.innerHTML += ` ${c} \u{1F449}`// código original unicode - U+1F600        
            res.innerHTML += `\u{1F3C1}`
            }

        } else {
            //contagem regressiva
            for (let c = i; c>= f; c -=p){
                res.innerHTML += ` ${c} \u{1F449}`
                res.innerHTML += `\u{1F3C1}`
            }
        }
    
   
    }

}