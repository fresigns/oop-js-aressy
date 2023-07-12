console.log('app');
// programmazione orientata agli oggetti

// oggetto generico
const book1 = {
    title: 'iliade',
    author: 'omero',
    dop: '27/12/2009', // date of publication
    publisher: 'einaudi', // casaEditrice
}
// ------------------------------------------------------------

// oggetto di tipo libro che ha la CLASSE Book
const book2 = new Book('Odissea', 'Omero', '27/12/2010', 'Einaudi'); 
const book3 = new Book('La Divina Commedia', 'Dante Alighieri', '27/12/1988', 'Feltrinelli');

console.log(book1); // prototipo oggetto generico
console.log(book2); // constructor: class Book - prototipo classe
// -------------------------------
// console.log(book1.title);
// console.log(book2.title);
// -------------------------------
// console.log(book1['author']);
// console.log(book2['author']);
// -------------------------------

// // Copio e 'modifico' il codice sottostante in book.js
// // Creo una funzione 'GetBookCard' che contiene le caratteristiche del libro

// function getBookCard(book){
//     const card = 'Titolo:' + book.title + '\n' + // a capo
//                  'Autore:' + book.author + '\n' + 
//                  'Data di pubblicazione: ' + book.dop + '\n' + 
//                  'Casa Editrice: ' + book.publisher + '\n' ;
//     return card; 
// }

// ------------------------------------------------------------
// ------------------------------------------------------------
// console.log(book3+'');
// ------------------------------------------------------------
// ------------------------------------------------------------
// // Scriviamo una funzione che mi ritorni la scheda del libro

// function toString(book) {
//     const card = 'Titolo: ' + book.title + '\n' + 
//                  'Autore: ' + book.author + '\n' +
//                  'Data di pubblicazione: ' + book.dop + '\n' +
//                  'Casa editrice: ' + book.publisher + '\n';
//     return card;
// }
// ------------------------------------------------------------
// console.log(book2.toString());
// console.log(book3.toString());
//             variabile.funzione()
// ------------------------------------------------------------
// ------------------------------------------------------------
// ------------------------------------------------------------
const magazine1 = new Magazine('Opera Oggi', '12/06/2023', 'Fabbri Editore', 23);
// console.log(magazine1);
// console.log(magazine1.toString());
// console.log(magazine1.getUpperTitle());

// // CLASSE ASTRATTA----------------

const pub1 = new Publication('pubblicazione1', '20/7/1980', 'Fabbri Editore');
// console.log(pub1.toString());
// console.log(pub1.getUpperTitle());
// ------------------------------------------------------------
// const schoolbook1 = new SchoolBook('matematicando', 'daniele petrelli', '23/4/2013', 'la scuola', 'matematica', 'terza media');
//                                                                     // ['23', '3', '2013']
//                                                                     // y => parseInt(a[2])                      
// // console.log(schoolbook1.toString());
// // console.log(schoolbook1.getUpperTitle())


/* ARES */
// oggetto di tipo libro
// invoco la funzione costruttore
const schoolbook1 = new Schoolbook('Storia storica', 'Ermanno Storioni', '31/12/3023', 'History Editions', 'Storia', 'Prima elementare');
// console.log(schoolbook1.toString());
// console.log(schoolbook1.getUpperTitle());
// ------------------------------------------------------------

// ------------------------------------------------------------
// Poter gestire gli stessi elementi di tipi diversi dentro lo stesso array
const libraryCollection = [book2, book3, schoolbook1, magazine1];     //questo array non contiene elementi di tipo diverso, in verità. 
                                                                      //Perché hanno tutti un parente comune (Publication). Quindi è come se JS li leggesse tutti come delle publication. 
                                                                      //questa si chiama POLIMORFIA


// for (const pub of libraryCollection) {
//      console.log(pub.toString());
// }                                                                

// quando faccio il toString, ognuno fa il suo. 
// Anche se prima erano tendenzialmente tutte publications
// mettiamo di voler cambiare le date e non gestirle più come delle stringhe, 
// bensì come dei numeri. Siccome Publication li determina tutti, 
// posso cambiare solo lui e a cascata cambia tutto

// ------------------------------------------------------------

const library1 = new Library([book2, book3, magazine1, schoolbook1]);

library1.deletePublication(3);

const book4 = new Book('se questo è un uomo', 'primo levi', '12/05/1998', 'adelphi');
library1.addPublication(book4);
// console.log(library1);

// ------------------------------------------------------------
// GUI --------------------------------------------------------
const gui = new GUI();

gui.start();

// ------------------------------------------------------------
// JSON -------------------------------------------------------

// JavaScript Object Notation: strutture dati traducibili in stringa

// const student1 = {
//     name: 'bryan',
//     yob: 1994,
//     isMarried: false
// }

// console.log(student1);

// const student1JSON = JSON.stringify(student1);
// //                        stringify trasforma in stringa

// console.log(student1JSON);
// // stringa che si porta dietro solo le proprietà



// const stringArray = ['qui', 'quo', 'qua'];
// const stringArrayJSON = JSON.stringify(studentArray);
// console.log(stringArrayJSON);

// -------------------------------------------
// const student2 = {
//     name: 'francesca',
//     yob: 1989,
//     isMarried: false
// }

// console.log(student2);

// const studentArray = [student1, student2];

// const studentArrayJSON = JSON.stringify(studentArray);
// console.log(studentArrayJSON);

// const jsonString = '[{"name":"bryan","yob":1994,"isMarried":false},{"name":"francesca","yob":1989,"isMarried":false}]'

// const studentArray = JSON.parse(jsonSTring);
// console.log(studentArray);
