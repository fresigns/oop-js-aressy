class Magazine extends Publication{

    constructor(title, dop, publisher, issue){

        super (title, dop, publisher);   // passa le proprietà di Publication
        this.issue = issue;
    }

    toString() {                                                     
        const card = super.toString() +
                'Numero uscita: ' + this.issue + '\n';
        return card;
    }
}