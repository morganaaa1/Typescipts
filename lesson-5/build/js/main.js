"use strict";
// convert to more less specific types
let a = "Hello";
let b = a; // less specific type
let c = a; // more specific type
let d = 'World';
let e = 'World';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(1, 2, 'concat');
// be careful! TS sees no problem here - but a string is returned
let nextVal = addOrConcat(1, 2, 'concat');
// 10 as string
10;
// The DOM
const img = document.querySelector('img');
const myImg = document.getElementById('img');
const nextImg = document.getElementById('img');
img.src;
myImg.src;
