class Book extends Publication{

    constructor(title, author, dop, publisher){

        super(title, dop, publisher); // passa le proprietà di Publication                           
        this.author = author;
    }

//  i metodi sono funzioni che non richiedono la parola function
    toString() {
        const card = 'Titolo: ' + this.title + '\n' + 
                     'Autore: ' + this.author + '\n' +
                     'Data di pubblicazione: ' + this.dop + '\n' +      
                     'Casa editrice: ' + this.publisher + '\n';
    
        return card;
    }
}