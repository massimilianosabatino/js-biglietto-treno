'use strict';

// definizione variabili con input utente
const kmUser = parseInt(prompt('Inserisci i km che dovrai percorrere.'));
const ageUser = parseInt(prompt('Inserisci la tua età'));

//Inizializzazione variabile ticketPrice base
let ticketPrice = 0.21 * kmUser;
console.log(ticketPrice);

//Definizione condizioni per valutare eventuale sconto
    //SE ageUser < 18
If (ageUser < 18) {
    ticketPrice = ticketPrice - (ticketPrice * 20 / 100);
    console.log(ticketPrice);
   // console.log(ticketPrice.toFixed(2));
}
    // modifico il valore della variabile ticketPrice con --> ticketPrice - (ticketPrice * 20 / 100)
    // restituisco il valore di ticketPrice
    // converto il risultato in una stringa con 2 decimali usando il metodo .toFixed(2)
//ALTRIMENTI SE ageUser > 65
    // modifico il valore della variabile ticketPrice con --> ticketPrice - (ticketPrice * 40 / 100)
    // restituisco il valore di ticketPrice
    // converto il risultato in una stringa con 2 decimali usando il metodo .toFixed(2)
//ALTRIMENTI 
    // restituisco il valore di ticketPrice
    // converto il risultato in una stringa con 2 decimali usando il metodo .toFixed(2)