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

    // creo delle variabili in cui salvo la posizione minima e la posizione massima che un elemento dentro l'array names può occupare
    var minPosition = 0;
    var maxPosition = names.length - 1;

    // chiedo all'utente due numeri
    // continuo a chiederglieli fino a quando l'input non è valido (cioè, fino a quando non è un numero compreso tra minPosition e maxPosition)
    do {
        var userNumber1 = parseInt(prompt('Inserisci un numero compreso tra ' + minPosition + ' e ' + maxPosition));
        if (!isInputValid(userNumber1, minPosition, maxPosition)) {
            alert('Per favore, inserisci un numero valido');
        }
    } while (!isInputValid(userNumber1, minPosition, maxPosition));

    do {
        var userNumber2 = parseInt(prompt('Inserisci un numero compreso tra ' + minPosition + ' e ' + maxPosition));
        if (!isInputValid(userNumber2, minPosition, maxPosition)) {
            alert('Per favore, inserisci un numero valido');
        }
    } while (!isInputValid(userNumber2, minPosition, maxPosition));

    // calcolo minimo e massimo tra userNumber1 e userNumber2
    var minNumber = Math.min(userNumber1, userNumber2);
    var maxNumber = Math.max(userNumber1, userNumber2);

    // creo un nuovo array con i valori che (all'interno dell'array names) si trovano in una posizione compresa tra minNumber e maxNumber
    // (minNumber e maxNumber inclusi)
    var namesSliced = names.slice(minNumber, maxNumber + 1);

    console.log(namesSliced);


});



// ********************* LE MIE FUNZIONI *********************
// questa funzione prende in input un valore e controlla se è un numero oppure no
// se è un numero (o comunque una stringa costituita da caratteri numerici), ritorna true
// altrimenti, ritorna false
function isNumber(value) {
    if (!isNaN(value)) {
        return true;
    } else {
        return false;
    }
}


// questa funzione prende in input tre numeri num, min e max, e controlla se num è compreso tra min e max
// se num è compreso tra min e max (eventualmente uguale a min o max), allora la funzione ritorna true
// altrimenti ritorna false
function isInRange(num, min, max) {
    if (num >= min && num <=max) {
        return true;
    } else {
        return false;
    }
}


// questa funzione serve a controllare se l'input inserito dall'utente è valido
// nel nostro caso, l'input dell'utente è valido se entrambe le seguenti condizioni sono soddisfatte:
    // - l'input è un numero
    // - l'input è compreso tra un min e un max
function isInputValid(input, min, max) {
    if (isNumber(input) && isInRange(input, min, max)) {
        return true;
    } else {
        return false;
    }
}
