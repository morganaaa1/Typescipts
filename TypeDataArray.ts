let nama: string[] = ["Ali", "Nabilah", "Ramadhan"];
// u can use 2 another way to use array
let numbers: Array<number> = [1,2,3,4,5];

// and in ts u can find tuple type data. in tuple for the data in the tuple is limited.
// and u can customize what type data what u want to use. we cannot enter more data than what we have customize
let student: [string, string, number] = ["1001", "Ali", 90];
let product: [string, number] = ["HP", 10];

// edit type data array & tupple in ts
nama[1] = "Azzahra"; //array
product[1] = 5000000; //tuple

//add data in type data array. u can use push to add some data
let namalagi: Array<String> = [];
namalagi.push("Ali");
namalagi.push("Nabilah");
namalagi.push("Ramadhan");

//for delete u can use delete.
delete namalagi[2];

// runing type data array & tupple in ts
// interesting in ts. ts will notify you of an error before running the file
console.log(nama[1]);
console.log(numbers[3]);
console.log(student);
console.log(product[1]);
console.log(namalagi);

