let isMarried: boolean = true;
// Error cause ts is strongly type. so, ts not so flexible like js
// isMarried = "Eko";

let age: number = 20;
// Error cause ts is strongly type. so, ts not so flexible like js
// age = true;
// age = "Eko";

let firstname: string = "Ali";
let lastname: string = "Nabilah Ramadhan";
let fullname: string = firstname + lastname;
// Error cause ts is strongly type. so, ts not so flexible like js
// firstname = true;

// let sayHello: string = "Hello " + firstname + "Selamat Pagi";
// it's too much it can be like this
let sayHello: string = `Hello ${firstname}, selamat pagi`;

console.log(sayHello);

