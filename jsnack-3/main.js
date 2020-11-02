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

    // creo una copia dell'array
    var copiedBooks = getCopyOfArray(books);
    console.log(copiedBooks);

});


// *************** LE MIE FUNZIONI ***************

// questa funzione prende in input un array e ne restituisce una copia
function getCopyOfArray(array) {
    return array.slice();
}
