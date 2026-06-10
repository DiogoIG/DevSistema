// analise booleana 

let status = true;
let acao = prompt("Indique uma ação 0 ou 1")
//let confirmar = confirm("Deseja realizar a alteração?");

if(acao !== "" && acao <= 1 && acao >= 0){
    let confirmar = confirm("Deseja realizar a alteração?");

    if(confirmar){

        if(acao == 0){
    status = false
    alert(`O Sistema foi desativado D: !!!  
        O status agr é: ${status}`)

        }else{
            alert(`O sistema esta Ativado :D !!!
                O status agr é: ${status}`)
        }

        alert("Voce confirmou :D ");

    } else {

        alert("Você cancelou >:( ");

    }

    
    console.log(`  Você informou ${acao}`);

} else {
    alert("Você não informou o codigo de ação");
}