// Simon Says

// Il computer genera 5 numeri casuali
let simonNumbers = arrayGenerator(5);

console.log(simonNumbers);

// I numeri vengono stampati sulla pagina
const wrapper = document.getElementById('simon-numbers');

console.log(wrapper);

// Ciclo per stampare i numeri in pagina tramite innerHtml
for (let i = 0; i < simonNumbers.length; i++){
    
    wrapper.innerHTML += `<span class="number">${simonNumbers[i]}</span> `;

}
// Parte un timer di 30 secondi
// A questo punto i 5 numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto
const clock = setTimeout(() => wrapper.classList.add('invisible'), 3000);

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

