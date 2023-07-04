// storage 
class Storage{
    constructor(){
    }

    saveData(data){ 
        const dataString = JSON.stringify(data); // trasforma i nostri data in stringa
        // console.log(dataString);
        localStorage.setItem('publications', dataString);
        // aggiungi item
    }

    loadData(){
        const dataString = localStorage.getItem('publications');

        if (dataString) {
            const data = JSON.parse(dataString);
            return data;
        }
        return null; // valore vuoto
    }
}