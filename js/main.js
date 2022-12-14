// Simon Says

// Il computer genera 5 numeri casuali
let simonNumbers = arrayGenerator(5);

const simonWrapper = document.getElementById('simon-numbers');

simonWrapper.innerHTML = simonNumbers;

// Parte un timer di 30 secondi 
setTimeout(
    function(){
        simonWrapper.classList.add('invisible');
        // Dopo 30 secondi scompare l'array generato dal pc e appaiono gli input
        addHelloThere(btn);
        addHelloThere(textField);

    }    
    , 3000);
    
    const btn = document.getElementById('button');
    let userArray = [];
    const textField = document.querySelector('input');
    
    btn.addEventListener('click' , 
    function(){
                
        let userNumber = parseInt(textField.value);
                
        if (simonNumbers.includes(userNumber)){
            
            if (!userArray.includes(userNumber)){
                
                pushAndPrint(userNumber);
                
            }
            
        } else if (isNaN(userNumber)) {
            
            console.log('Hey bucchì, non è un numero questo!');
            
            const validationOutput = document.getElementById('output-false');

            addHelloThere(validationOutput);

            validationOutput.innerHTML = 'Hey bucchì, non è un numero questo!';

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
    
    addHelloThere(userOutput);
}

function addHelloThere (element1){
    element1.classList.add('hellothere');
}

function arrayComparator (){
    if(userArray[x] === simonNumbers[x]){
        pushAndPrint(item);
    }
}