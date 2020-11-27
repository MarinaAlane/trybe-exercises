//Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resul1 = 0 ;
let resul2 = 0 ;

for (i = 0; i < numbers.length; i++){
    resul1 +=numbers[i]
}

resul2 = resul1 / numbers.length 
 
if (resul2 > 20 ) {
    console.log("valor maior que 20")
} else {
    console.log("valor menor que 20")
}