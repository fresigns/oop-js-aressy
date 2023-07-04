// GUI - Graphical User Interface 

class GUI{
    constructor(){

        this.library = new Library();
        
        this.storage = new Storage();

        const data = this.storage.loadData();
        // console.log(data);

    //     if (data) {
    //         this.library.fromDbObjects(data);
    //     }
    // }

    if (data !== null) {
        this.library.fromDbObjects(data);
    }
}

// ----------------------------
    // start(){
    //     const firstChoice = prompt('Hai 4 opzioni: \n' + 
    //     '1) Guardala lista dei libri  \n' +
    //     '2) Aggiungi un libro \n' + 
    //     '3) Rimuovi un libro\n' +
    //     '4) Esci dal programma \n' +
    //     'Inserisci il numero dell\'operazione');

    //     if (firstChoice === '1') {
            
    //     } else if (firstChoice === '2') {
    //     } else if (firstChoice === '3') {
    //     } else if (firstChoice === '4') {
    //     } else {
    //         alert('hai sbagliato ad inserire l\'opzione!');
    //     }
    // }
// ----------------------------
    start(){
        while(true){ // loop

            const firstChoice = prompt('Hai 4 opzioni: \n' + 
            '1) Guardala lista dei libri  \n' +
            '2) Aggiungi un libro \n' + 
            '3) Rimuovi un libro\n' +
            '4) Esci dal programma \n' +
            'Inserisci il numero dell\'operazione');

            if (firstChoice === '1') { 
                this.showBooks();
            } else if (firstChoice === '2') {
                this.insertBook();
            } else if (firstChoice === '3') {
                this.deleteBook();
            } else if (firstChoice === '4') { 
                break;
            } else {
                alert('hai sbagliato ad inserire l\'opzione!');
            }
        }
    }

// first choice
    showBooks(){
        const allBooks = this.library.getAllBookCards();
        // console.log(allBooks);
        alert(allBooks);
    }
// second choice
    insertBook(){
        const title = prompt('inserisci il titolo del libro');
        const author = prompt('inserisci l\'autore del libro');
        const dop = prompt('inserisci la data di pubblicazione nel formato gg/mm/aaaa');
        const publisher = prompt('inserisci la casa editrice');

        const book = new Book(title, author, dop, publisher);

        this.library.addPublication(book);
        // console.log(this.library);

        this.storage.saveData(this.library.publications); // salvo ogni cambiamento dello stato dei miei dati
    }
// third choice
    deleteBooks(){
        const humanIndex = prompt('Inserisci il numero del libro da eliminare');
        const index = humanIndex -1;
        this.library.deletePublication(index);

        this.storage.saveData(this.library.publications); // ogni volta che cambia qualcosa aggiorno la mia library
    }
} // fine class GUI


// storage -----------------