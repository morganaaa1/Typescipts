// Type Aliases
// Define some custom types using type aliases
type StringOrNumber = string | number;
type StringOrNumberArray = (string | number)[];
type Guitarist = {
    name?: string, // an optional property
    active: boolean,
    albums: StringOrNumberArray // an array that can contain strings or numbers
}
type UserId = StringOrNumber; // another type alias

// Literal Types
// Define some variables with literal types
let myName: 'Ali' // can only be the string 'Ali'
let userName: 'Ali' | 'Nabilah' | 'Ramadhan' // can only be one of these three strings
userName = 'Nabilah'

// Function
// Define some functions with different parameter types and return types
const add = (a: number, b: number): number => {
    return a + b;
}
const logMsg = (message: any): void => {
    console.log(message);
}
let subtract = function (c: number, d: number): number {
    return c - d;
}
type mathFunction = (a: number, b: number) => number; // define a type alias for a function with these parameters and return type
let multiply: mathFunction = function (c, d) { // use the type alias to define a function
    return c * d;
}
logMsg(multiply(2, 3));

// Optional Parameters
// Define a function with an optional parameter
const addAll = (a: number, b: number, c?: number): number => {
    if (typeof c !== 'undefined') { // check if the optional parameter is defined
        return a + b + c;
    }
    return a + b;
}

// Default Parameters Value
// Define a function with default parameter values
const sumAll = (a: number = 10, b: number, c: number = 2): number => {
    return a + b + c;
}

// Rest Parameters
// Define a function with a rest parameter, which allows any number of additional arguments to be passed in as an array
const total = (a: number, ...nums: number[]): number => {
    return a + nums.reduce((prev, curr) => prev + curr);
}

// Use of the Never Type
// Define a function that throws an error and never returns
const createError = (errMsg: string): never => {
    throw new Error(errMsg);
}
// Define a function that runs forever and never returns
const infinite = () => {
    let i: number = 1
    while (true) {
        i++;
        if (i > 100) break;
    }
}

// Custom Type Guards
// Define a function that checks if a value is a number
const isNumber = (value: any): boolean => {
    return typeof value === 'number'
        ?true : false
}

// Use of the Never Type
// Define a function that takes a parameter of either a number or string, and returns a string indicating the type of the parameter
const numberOrString = (value: number | string): string => {
    if (typeof value === 'string') return 'string';
    if (isNumber (value)) return 'number'
    return createError('This should not happen!');
}
