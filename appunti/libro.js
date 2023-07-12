let libro = {
    titolo: "Il signore degli anelli",
    autore: "J.R.R. Tolkien",
    annoPubblicazione: 1954,
    genere: "Fantasy",
    numeroPagine: 1178,
    descrizione: function() {
      console.log("Il libro " + this.titolo + " scritto da " + this.autore + " è un " + this.genere + " pubblicato nel " + this.annoPubblicazione + ".");
    },
    leggi: function() {
      console.log("Stai leggendo " + this.titolo + " di " + this.autore + ".");
    }
  };

// oggetto chiamato libro con diverse proprietà: titolo, autore, annoPubblicazione, genere, numeroPagine
// ------------------------------------------------------------
// abbiamo definito due metodi, "descrizione" e "leggi", che sono funzioni associate all'oggetto.
// ------------------------------------------------------------
// per accedere alle proprietà e chiamare i metodi dell'oggetto "libro" 
// si può utilizzare la notazione punto

console.log(libro.titolo);   // Output: Il signore degli anelli
console.log(libro.autore);   // Output: J.R.R. Tolkien
libro.descrizione();         // Output: Il libro Il signore degli anelli scritto da J.R.R. Tolkien è un Fantasy pubblicato nel 1954.
libro.leggi();               // Output: Stai leggendo Il signore degli anelli di J.R.R. Tolkien.
// ------------------------------------------------------------