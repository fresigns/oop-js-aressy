class Magazine extends Publication{

    constructor(title, dop, publisher, issue){

        super (title, dop, publisher)   //super chiama il costruttore della classe genitore
        this.issue = issue;


    }

    toString() {                                                     
        const card = super.toString() +
                     'Numero uscita: ' + this.issue + '\n';       //ho lasciato solamente le cose uniche di Magazine e ho fatto fare il resto al super
        return card;
    }


   //getUpperTitle(){
   //    const upperTitle = this.title.toUpperCase();
   //    return upperTitle; 
   //}


}