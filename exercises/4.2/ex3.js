//Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resul1 = 0 ;
let resul2 = 0 ;

for (i = 0; i < numbers.length; i++){
    resul1 +=numbers[i]
}

resul2 = resul1 / numbers.length 
console.log(resul2)