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
    do {
        var userNumber1 = parseInt(prompt('Inserisci un numero'));
        if (isNaN(userNumber1)) {
            alert('Per favore, inserisci un numero');
        }
    } while (isNaN(userNumber1));

    do {
        var userNumber2 = parseInt(prompt('Inserisci un numero'));
        if (isNaN(userNumber2)) {
            alert('Per favore, inserisci un numero');
        }
    } while (isNaN(userNumber2));

    console.log(userNumber1);
    console.log(userNumber2);


});
