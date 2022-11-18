


// Simon Says

// Il computer genera 5 numeri casuali
let simonNumbers = arrayGenerator(5);

console.log(simonNumbers);

const simonWrapper = document.getElementById('simon-numbers');

console.log(simonWrapper);

simonWrapper.innerHTML = simonNumbers;
// Parte un timer di 30 secondi 
const timer = setTimeout(
    function(){
        for(let i = 0; i < 5; i++){
            
            let userNumber = parseInt(prompt('Inserisci uno dei numeri che hai visto ... '));

            console.log(userNumber);
            
            let userArray = [];
            

            if (userNumber == simonNumbers[i]){
                    
                userArray.push(userNumber);
                
                let counter = userArray.length;
                console.log(counter);
    
                console.log(userArray);
    
                console.log('Hai indovinato ' + counter + 'numeri');
            }



        }
    }
, 3000);

// A questo punto i 5 numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto

// const clock = setTimeout(() => wrapper.classList.add('invisible'), 30000);

let userArray = [];


    







// Functions
function numberGenerator(){
    // Genera un numero random da 1 a 100
    return Math.floor((Math.random() * 100) + 1);
    
}

function arrayGenerator(elementsNumber){
    // Genera un array di numeri random
    
    const newArray = [];
    
    // Generare un array di elementsNumber elementi
    while(newArray.length < elementsNumber){
        
        // Genera un numero random 
        let newNumber = numberGenerator();
        
        // Lo pusha nell'array
        newArray.push(newNumber);
        
    }
    
    // Ritorna l'array
    return newArray;
}




