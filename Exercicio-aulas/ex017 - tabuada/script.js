function clicar() {
var num = window.document.querySelector('input#numero') 
var tab = window.document.querySelector ('select#seltab')

if (num.value.length == 0) {
    window.alert ('Preencha o campo: Número')    
    
} else {
    var n = Number (num.value)
    var c = 1
    
    tab.innerHTML = ''
    for (var c; c<=10;c++){
        item = document.createElement ('option')
        item.text = `${n} x ${c} = ${n*c}`
        item.value = `tab ${c}`
        tab.appendChild (item)
    }

    /*while (c <=10){
        item = document.createElement ('option')
        item.text = `${n} x ${c} = ${n*c}`
        tab.appendChild (item)
        c++
    }*/
}
}
