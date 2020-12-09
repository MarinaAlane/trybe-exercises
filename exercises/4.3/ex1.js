//Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n .

let n =  5 ;
let linha = "" ;


for (let i = 1 ; i <= n ; i+=1) {
    for(let f = 1; f <= n; f +=1) {
        linha += "*"
    }
    console.log(linha)
    linha = ""
    
}
