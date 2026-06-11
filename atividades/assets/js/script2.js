let proddp = true
let prodqt = prompt(`Digite a quantidade: `)

if(prodqt !== ""  ){
    let numero = Number(prompt)
    if (typeof numero === "number"){
    if (numero > 0){
        alert(`Produto disponivel!`)

    }else{
        proddp = false
        alert (`Produto não disponivel!`)
    }
}else {
    alert (`Você digitou letra e não numero ☺ .`)
}


}else {
    alert(`Você nao escreveu nada >:( `)
}


