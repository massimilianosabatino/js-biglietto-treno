'use strict';

// definizione variabili con input utente
const kmUser = parseInt(prompt('Inserisci i km che dovrai percorrere.'));
const ageUser = parseInt(prompt('Inserisci la tua età'));

//Inizializzazione variabile ticketPrice base
let ticketPrice = 0.21 * kmUser;
console.log(ticketPrice);

//Definizione condizioni per valutare eventuale sconto in base all'età
if (ageUser < 18) {
    ticketPrice = ticketPrice - (ticketPrice * 20 / 100);
    console.log(ticketPrice);
    console.log(ticketPrice.toFixed(2));
} else if (ageUser > 65) {
    ticketPrice = ticketPrice - (ticketPrice * 40 / 100);
    console.log(ticketPrice);
    console.log(ticketPrice.toFixed(2));
} else {
    console.log(ticketPrice);
    console.log(ticketPrice.toFixed(2));
}