


// Simon Says

// Il computer genera 5 numeri casuali
let simonNumbers = arrayGenerator(5);

console.log(simonNumbers);

const simonWrapper = document.getElementById('simon-numbers');

simonWrapper.innerHTML = simonNumbers;
console.log(simonWrapper);

// Parte un timer di 30 secondi 
setTimeout(
    function(){
        simonWrapper.classList.add('invisible');
    }    
, 30000);

const btn = document.getElementById('button');
let userArray = [];
const textField = document.querySelector('input');

btn.addEventListener('click' , 
    function(){
        

        console.log(textField);
        
        let userNumber = parseInt(textField.value);
        
        console.log(userNumber);
        
        if (simonNumbers.includes(userNumber)){
        
            if (!userArray.includes(userNumber)){
                
                pushAndPrint(userNumber);
                
            }
            console.log(userArray);
            
        }
        

    }
    );



    
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

function pushAndPrint (item) {
    
    userArray.push(item);
    
    let counter = userArray.length;
    
    const userOutput = document.getElementById('output');
    
    userOutput.innerHTML = `${userArray} <br> Hai indovinato ${counter} numeri`;
    
}



