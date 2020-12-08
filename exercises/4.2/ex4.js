//Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20"; 

let resultado1 = 0 

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27] 
for ( let i= 0 ; i < numbers.length; i ++) { 

    resultado1 += numbers[i] 
    
    } 
    
    let resultado2 = resultado1 / 2 
    if ( resultado2 > 20 ) { 

        console.log('valor maior que 20') 
        
        } else { 
        
        console.log('valor menor que 20') 
        
        } 