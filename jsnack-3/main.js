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

    // predispongo un array vuoto in cui andrò a salvare una copia dell'array books
    var clonedBooks = [];

    // ciclo sull'array books
    for (var i = 0; i < books.length; i++) {
        // per ogni oggetto nell'array books, ne creo una copia e la salvo nell'array copiedBooks
        // in questo modo, copiedBooks sarà una copia dell'array books
        // le due copie sono distinte, e quindi modificando l'una non andremo a modificare l'altra
        var clone = cloneObject(books[i]);
        clonedBooks.push(clone);
    }

    // ciclo sull'array copiedBooks
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

// questa funzione prende in input un oggetto e ne restituisce una copia
// la copia è distinta dall'originale: modificando l'una non viene modificata l'altra
function cloneObject(object) {
    var clone = {};
    for (var key in object) {
        clone[key] = object[key];
    }
    return clone;
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
