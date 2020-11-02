/*  CONSEGNA: A partire da un array di oggetti, creare una copia dell'array
e aggiungere ai singoli elementi dell'array una nuova proprietà "position" che contiene una lettera casuale.  */


$(document).ready(function() {

    // creo un array di oggetti
    // ciascun oggetto rappresenta un libro
    var books = [
        {
            'title' : 'Frankenstein',
            'author' : 'Mary Shelley',
            'genre' : 'Gothic novel'
        },
        {
            'title' : 'Hard times',
            'author' : 'Charles Dickens',
            'genre' : 'Novel'
        },
        {
            'title' : 'Fahrenheit 451',
            'author' : 'Ray Bradbury',
            'genre' : 'Dystopian'
        },
        {
            'title' : 'Three Men in a Boat',
            'author' : 'Jerome Klapka Jerome',
            'genre' : 'Comedy novel'
        }
    ];

    // clono l'array books
    var clonedBooks = clone(books);

    // ciclo sull'array clonedBooks
    for (var i = 0; i < clonedBooks.length; i++) {
        // genero una lettera casuale dell'alfabeto
        var randomLetter = getRndLetter();
        // aggiungo al libro corrente (cioè, quello in posizione i) la proprietà "position" e gli assegno come valore la lettera appena generata
        clonedBooks[i].position = randomLetter;
    }

    console.log(clonedBooks);
    console.log(books);


});


// *************** LE MIE FUNZIONI ***************

// questa funzione prende come parametro un oggetto o un array e restituisce una sua copia
// modificando la copia non viene modificato l'originale
function clone(original) {
    // creo una variabile in cui andrò a salvare la copia
    var copy;

    // controllo se l'argomento che è stato passato alla funzione è un array o un oggetto
    if (Array.isArray(original)) {
        // se l'originale è un array, anche la copia dovrà essere un array
        copy = [];
    } else if (typeof(original) === "object") {
        // se l'originale è un oggetto, anche la copia dovrà essere un oggetto
        copy = {};
    }

    // ciclo sull'array/oggetto originale
    for (var key in original) {
        if (!Array.isArray(original[key]) && typeof(original[key]) !== "object") {
            // se il valore "original[key]" associato alla chiave corrente "key" non è né un array né un oggetto,
            // mi limito ad inserire dentro la copia che sto creando la coppia chiave-valore "key : original[key]"
            copy[key] = original[key];
        } else {
            // altrimenti, inserisco nella copia che sto creando la chiave "key" e gli associo come valore una copia di "original[key]"
            // per fare questo, occorre richiamare ricorsivamente la funzione "clone"
            // in questo modo, nessuna modifica operata (a qualunque livello) sulla copia potrà andare a modificare l'originale
            copy[key] = clone(original[key]);
        }
    }

    return copy;
}


// questa funzione prende in input un min e un max e ritorno un valore casuale compreso tra di essi
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}


// questa funzione ritorna una lettera a caso dell'alfabeto
function getRndLetter() {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var randomNumber = getRndInteger(0, alphabet.length - 1);
    return alphabet[randomNumber];
}
