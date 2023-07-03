class Book extends Publication{                               //questo codice dice a JS che Book estende Publication, vale a dire che Book è figlia di Publication

    constructor(title, author, dop, publisher){
//this fa riferimento all'oggetto che stiamo costruendo
        super(title, dop, publisher);                           //scrivendo questo sto dicendo che Book si deve gestire solo il parametro che non eredita da Publication, vale a dire author
        this.author = author;
        



    }

    //qui sotto "function" veniva sottolineato in rosso. Questo perché una funzione dentro una classe non richiede la funzione. Ho tolto "function"
    toString() {                                                     //ho tolto anche il parametro "book" dalla funzione perché non serve
        const card = 'Titolo: ' + this.title + '\n' + 
                     'Autore: ' + this.author + '\n' +
                     'Data di pubblicazione: ' + this.dop + '\n' +      //infine ho tolto tutti i "book." e li ho sostituiti con "this."
                     'Casa editrice: ' + this.publisher + '\n';             //vai a vedere il toString di magazine.js. Avrei potuto fare uguale lì, l'ho tenuto solo per avercelo
    
        return card;
    }
    

    //se da qui rimuovo (qui l'ho commentata) getUpperTitle, il codice non si rompe perché va a vedere se può prenderla dal genitore

    //getUpperTitle(){
    //    const upperTitle = this.title.toUpperCase();
    //    return upperTitle; 
    //}




}