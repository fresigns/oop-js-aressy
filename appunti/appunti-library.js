// library.js
// --------------------------

/*
classe Library
che viene inizializzato con un array vuoto 
publications = []

può contenere sia book che magazine

creo una funzione: aggiunge una pubblicazione al mio array 
e passo il parametro pub

addPublication(pub)
------------





*/


// LIBRARY -----------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------
class Library{
    constructor(publications = []) { // viene inizializzato un array vuoto

        this.publications = publications;
    }
    
    addPublication(pub) {
    this.publications.push(pub)
    }
// ----------------------------
    // deletePublication(index){ // filtrare la nostra publication
    //                                 // filter // '_' il primo parametro non viene utilizzato
    // this.publications = this.publications.filter((_, i) => i !== index); 
    // }
// ----------------------------
 // altro modo in cui avrei potuto scriverlo: 
    deletePublication(index){ 
    this.publications.splice(index, 1);  // in place
    }

// ----------------------------
    // getAllBookCards(){
    //     let allCards = '';

    //     for (const pub of this.publications) {
    //         allCards += pub.toString();
    //     }
    //     return allCards;
    // }
// ----------------------------

    getAllBookCards(){

        let allCards = '';

    for (let i = 0; i < this.publications.length; i++) {
        const pub = this.publications[i];
        const humanIndex = i + 1;
        allCards += humanIndex + ') ' + pub.toString();
        allCards += '----------------------------\n';
    }
        return allCards;
    }



// data - array di oggetti generici
    fromDbObjects(data){
        for (const genericObject of data) {
            const book = new Book(genericObject.title, genericObject.author, genericObject.dop, genericObject.publisher);            
            this.publications.push(book);
        }
    }

}


