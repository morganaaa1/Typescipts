"use strict";
// Literal Types
// Define some variables with literal types
let myName; // can only be the string 'Ali'
let userName; // can only be one of these three strings
userName = 'Nabilah';
// Function
// Define some functions with different parameter types and return types
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
let subtract = function (c, d) {
    return c - d;
};
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 3));
// Optional Parameters
// Define a function with an optional parameter
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') { // check if the optional parameter is defined
        return a + b + c;
    }
    return a + b;
};
// Default Parameters Value
// Define a function with default parameter values
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
// Rest Parameters
// Define a function with a rest parameter, which allows any number of additional arguments to be passed in as an array
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
// Use of the Never Type
// Define a function that throws an error and never returns
const createError = (errMsg) => {
    throw new Error(errMsg);
};
// Define a function that runs forever and never returns
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
// Custom Type Guards
// Define a function that checks if a value is a number
const isNumber = (value) => {
    return typeof value === 'number'
        ? true : false;
};
// Use of the Never Type
// Define a function that takes a parameter of either a number or string, and returns a string indicating the type of the parameter
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (isNumber(value))
        return 'number';
    return createError('This should not happen!');
};
