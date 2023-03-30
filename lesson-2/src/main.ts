// Declare and initialize variables of various types
let myName: string = "Ali";
let meaningOfLife: number;
let isLoading: boolean;
let album: any;

myName = "Ali"; // Update the value of myName
meaningOfLife = 42; // Assign a value to meaningOfLife
isLoading = true; // Assign a value to isLoading
album = 1945; // Assign a value to album

// Declare a function that takes a number and a string and returns a string
const sum = (a: number, b: string): string => {
    return a + b;
}

// Declare variables that can be either a string or a number, and a number or a boolean
let postId: string | number;
let isActive: number | boolean;

// Declare a regular expression that matches one or more word characters globally
let re: RegExp = /\w+/g;
