// Simon Says

// Il computer genera 5 numeri casuali

// I numeri vengono stampati sulla pagina


// Parte un timer di 30 secondi

// A questo punto i 5 numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto

// Infine il computer comunica quanti e quali numeri sono stati indovinati







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

