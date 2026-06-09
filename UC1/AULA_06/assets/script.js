// numeros e operados

let v1 = 10;
let v2 = 5;

const totalsoma = v1 + v2;
const totalsubtracao = v1 - v2;
const totalmultiplicacao = v1 * v2;
const totaldivisao = v1 / v2;
console.log("Operações");

let num = 1


console.log(`
Calculo com operadores matematicos

${num++}. Valor 1: ${v1} e Valor 2: ${v2}
${num++}. Resultado soma: ${totalsoma}
${num++}. Resultado subtração: ${totalsubtracao}
${num++}. Resultado multiplicação: ${totalmultiplicacao}
${num++}. Resultado divisão: ${totaldivisao}
    `);

let prod = "Computador";
let valor = 2256.00;
let desc = 750.00;
const vf = valor - desc;
let numb = 1;


let valorreais = desc.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});
let valorreais1 = valor.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});
let valorreais2 = vf.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});


console.log(`
    Produto: ${prod}
${numb++}. Valor: ${valorreais1} R$
${numb++}. Desconto: ${valorreais} R$
${numb++}. Valor final: ${valorreais2} R$
    `);



