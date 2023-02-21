# Esercizio Costo biglietto del treno

Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

//Inizializzazione variabile kmUser chiedendo all'utente il numero di Km che vuole percorrere (convertire in numero con la funzione parseInt)
//Inizializzazione variabile ageUser chiedendo all'utente l'età (convertire in numero con la funzione parseInt)
//Inizializzazione variabile ticketPrice con valore derivato dal calcolo del costo chilometrico moltiplicando 0.21 (prezzo € al km definito) * la variabile kmUser
//Definizione condizioni per valutare eventuale sconto
    //SE ageUser < 18
        modifico il valore della variabile ticketPrice con --> ticketPrice - (ticketPrice * 20 / 100)
        restituisco il valore di ticketPrice
        converto il risultato in una stringa con 2 decimali usando il metodo .toFixed(2)
    //ALTRIMENTI SE ageUser > 65
        modifico il valore della variabile ticketPrice con --> ticketPrice - (ticketPrice * 40 / 100)
        restituisco il valore di ticketPrice
        converto il risultato in una stringa con 2 decimali usando il metodo .toFixed(2)
    //ALTRIMENTI 
        restituisco il valore di ticketPrice
        converto il risultato in una stringa con 2 decimali usando il metodo .toFixed(2)