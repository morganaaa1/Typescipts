let stringArr = ["a", "b", "c"];

let guitars = ['strat', 5150, 'les paul'];

let mixedData = ['EVH', 1984, true];

stringArr[0] = 'Ali';
stringArr.push('hey');

guitars[0] = '1984';
guitars.unshift('Jim');

let test = []
let bands: string[] = [];
bands.push('AC/DC');

// Tuple
let myTupple: [string, number, boolean] = ['Ali', 1984, true];

let mixed = ['Ali', 1984, true]

myTupple[1] = 42;

// Objects
let myObj: object
myObj = []
console.log(typeof myObj)
myObj = bands
myObj = {}

const exampleObj = {
    prop1: 'Ali',
    prop2: true,
}

exampleObj.prop1 = 'Ali'

interface Guitarist {
    name?: string,
    active: boolean,
    albums: (string | number)[]
}

let evh: Guitarist = {
    name: 'Eddie Van Halen',
    active: false,
    albums: ['1984', '5150', 'OU812', 1991]
}

let jp: Guitarist = {
    name: 'Jimi Page',
    active: true,
    albums: ['Led Zeppelin', 'Led Zeppelin II', 'Led Zeppelin III', 'Led Zeppelin IV']
}

const greetGuitarist = (guitarist: Guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`
    }
    return 'Hello!'
}

console.log(greetGuitarist(jp))

// Enums
// "Unlike most TypeScript features, Enums are not a type-level addition to JavaScript but something added to the language and runtime"

enum Grade {
    U = 1,
    D,
    C,
    B,
    A
}

console.log(Grade.U)