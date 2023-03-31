// Define an array of strings
let stringArr = ["a", "b", "c"];

// Define an array of mixed data types
let guitars = ['strat', 5150, 'les paul'];

// Define another array of mixed data types
let mixedData = ['EVH', 1984, true];

// Modify stringArr by changing the first element and adding a new element
stringArr[0] = 'Ali';
stringArr.push('hey');

// Modify guitars by changing the first element and adding a new element at the beginning
guitars[0] = '1984';
guitars.unshift('Jim');

// Define an empty array and an array of strings
let test = []
let bands: string[] = [];

// Add a new element to the bands array
bands.push('AC/DC');

// Define a tuple with three elements of different types
let myTupple: [string, number, boolean] = ['Ali', 1984, true];

// Define another array of mixed data types
let mixed = ['Ali', 1984, true]

// Modify the second element of the myTupple tuple
myTupple[1] = 42;

// Define an object variable with an undefined value
let myObj: object

// Assign an empty array to myObj and check its type
myObj = []
console.log(typeof myObj)

// Assign the bands array to myObj
myObj = bands

// Assign an empty object to myObj
myObj = {}

// Define an object with two properties
const exampleObj = {
    prop1: 'Ali',
    prop2: true,
}

// Modify the value of the prop1 property of exampleObj
exampleObj.prop1 = 'Ali'

// Define an interface for a Guitarist object
interface Guitarist {
    name?: string,
    active: boolean,
    albums: (string | number)[]
}

// Define two Guitarist objects
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

// Define a function that takes a Guitarist object and returns a greeting string
const greetGuitarist = (guitarist: Guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`
    }
    return 'Hello!'
}

// Call the greetGuitarist function with the jp object as an argument and log the result to the console
console.log(greetGuitarist(jp))

// Define an enum for grades
enum Grade {
    U = 1,
    D,
    C,
    B,
    A
}

// Log the value of the U element of the Grade enum to the console
console.log(Grade.U)
