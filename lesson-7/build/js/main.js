"use strict";
// Index Signature
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
    Ali: 42
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);
let prop = 'Pizza';
console.log(todaysTransactions[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (let prop in transactions) {
        total += transactions[prop];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
// todaysTransactions.Pizza = 40;
console.log(todaysTransactions['Ali']);
const student = {
    name: 'Ali',
    GPA: 3.5,
    classes: [100, 200]
};
// console.log(student.test);
