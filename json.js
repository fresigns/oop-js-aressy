
// ------------------------------------------------------------
// JSON ------------------------------------ formato di stringa

// JavaScript Object Notation: strutture dati traducibili in stringa

const student1 = {
    name: 'bryan',
    yob: 1994,
    isMarried: false
}
// // -------------------------------------------
console.log(student1);

const student1JSON = JSON.stringify(student1);
// // //                        stringify trasforma in stringa

console.log(student1JSON);
// // // stringa che si porta dietro solo le proprietà

const stringArray = ['qui', 'quo', 'qua'];

const stringArrayJSON = JSON.stringify(stringArray);

console.log(stringArrayJSON);
// // -------------------------------------------
const student2 = {
    name: 'francesca',
    yob: 1989,
    isMarried: false
}

let studentArray = [student1, student2];

const studentArrayJSON = JSON.stringify(studentArray);

console.log(studentArrayJSON);


let jsonString = '[{"name":"bryan","yob":1994,"isMarried":false},{"name":"francesca","yob":1989,"isMarried":false}]'

// const studentArray = JSON.parse(jsonString);

console.log(studentArray);