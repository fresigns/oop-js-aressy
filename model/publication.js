class Publication{
        constructor(title, dop, publisher){

        this.title = title;

        if (dop === null) {
            this.dop = new Date();
        } else if (dop.includes('/')){
            const dopArray = dop.split('/'); 
            const year = parseInt(dopArray[2]);
            const month = parseInt(dopArray[1]) - 1;
            const day = parseInt(dopArray[0]);                   
            this.dop = new Date(year, month, day);
        } else {
            this.dop = new Date(dop);
        }
        
        this.publisher = publisher;
    }
    toString() {                                                     
        const card = 'Titolo: ' + this.title + '\n' + 
                    'Data di pubblicazione: ' + this.dop + '\n' +      
                    'Casa editrice: ' + this.publisher + '\n' ;
                    
        return card;
    }
    getUpperTitle(){
        const upperTitle = this.title.toUpperCase();
        return upperTitle; 
    }
}