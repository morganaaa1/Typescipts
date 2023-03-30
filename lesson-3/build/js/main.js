"use strict";
let stringArr = ["a", "b", "c"];
let guitars = ['strat', 5150, 'les paul'];
let mixedData = ['EVH', 1984, true];
stringArr[0] = 'Ali';
stringArr.push('hey');
guitars[0] = '1984';
guitars.unshift('Jim');
let test = [];
let bands = [];
bands.push('AC/DC');
// Tuple
let myTupple = ['Ali', 1984, true];
let mixed = ['Ali', 1984, true];
myTupple[1] = 42;
// Objects
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: 'Ali',
    prop2: true,
};
exampleObj.prop1 = 'Ali';
let evh = {
    name: 'Eddie Van Halen',
    active: false,
    albums: ['1984', '5150', 'OU812', 1991]
};
let jp = {
    name: 'Jimi Page',
    active: true,
    albums: ['Led Zeppelin', 'Led Zeppelin II', 'Led Zeppelin III', 'Led Zeppelin IV']
};
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`;
    }
    return 'Hello!';
};
console.log(greetGuitarist(jp));
// Enums
// "Unlike most TypeScript features, Enums are not a type-level addition to JavaScript but something added to the language and runtime"
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
