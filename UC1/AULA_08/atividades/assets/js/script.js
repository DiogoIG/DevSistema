let prodel = false
let produt = prompt(`Digite o nome do produto: `)

if (produt !== ""){
    let prodok = confirm(`Deseja confirma o ${produt}?`)
    if(prodok ){
        
     prodel = true
    
         //alert(`produto continua: ${prodel} `)
         //esse alert esta sendo usado para testar se o resultado esta dando true
         
     alert(`Produto excluido!`)
     
     
    } else {
        
        //alert(`produto continua: ${prodel} `)
        //esse alert foi usado pra testar se o Else esta dando resultado false

        alert(`Você cancelou!`)
    }


} else {
    alert(`Você não escreveu nada!`)
}


