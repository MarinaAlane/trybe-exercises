//descubra qual o maior valor contido no array e imprima-o; 


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]; 

let valorFinal = numbers.reduce(function(a, b) { 

return Math.max(a, b); 

}); 
console.log(valorFinal) 