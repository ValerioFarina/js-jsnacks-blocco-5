/*  CONSEGNA: Creare un array di nomi e chiedere all'utente due numeri.
Creare un nuovo array con i valori che si trovano in una posizione compresa tra i due numeri inseriti dall'utente.  */

$(document).ready(function() {

    // creo un array di nomi
    var names = [
        'Luca',
        'Paolo',
        'Giovanna',
        'Stefania',
        'Federico',
        'Mirco',
        'Antonio',
        'Laura'
    ];
    console.log(names);

    // chiedo all'utente due numeri
    // continuo a chiederglieli fino a quando l'input inserito dall'utente
    // o non è un numero
    // oppure è un numero non compreso tra 0 e names.length - 1
    // infatti, ciascun numero inserito dall'utente dovrebbe essere un indice all'interno dell'array names
    do {
        var userNumber1 = parseInt(prompt('Inserisci un numero compreso tra 0 e ' + (names.length - 1)));
        if (isNaN(userNumber1) || userNumber1 < 0 || userNumber1 >= names.length) {
            alert('Per favore, inserisci un numero valido');
        }
    } while (isNaN(userNumber1) || userNumber1 < 0 || userNumber1 >= names.length);

    do {
        var userNumber2 = parseInt(prompt('Inserisci un numero compreso tra 0 e ' + (names.length - 1)));
        if (isNaN(userNumber2) || userNumber2 < 0 || userNumber2 >= names.length) {
            alert('Per favore, inserisci un numero valido');
        }
    } while (isNaN(userNumber2) || userNumber2 < 0 || userNumber2 >= names.length);

    // calcolo minimo e massimo tra userNumber1 e userNumber2
    var minNumber = Math.min(userNumber1, userNumber2);
    var maxNumber = Math.max(userNumber1, userNumber2);

    // creo un nuovo array con i valori che (all'interno dell'array names) si trovano in una posizione compresa tra minNumber e maxNumber
    // (minNumber e maxNumber inclusi)
    var namesSliced = names.slice(minNumber, maxNumber + 1);

    console.log(namesSliced);


});
