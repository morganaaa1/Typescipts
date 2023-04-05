// Index Signature


// interface TransactionObj {
//     readonly [index: string]: number;
    
// }
interface TransactionObj {
    readonly [index: string]: number;
    Pizza: number;
    Books: number;
    Job: number;
}

const todaysTransactions: TransactionObj = {
    Pizza: -10,
    Books: -5,
    Job: 50,
    Ali: 42
}

console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);

let prop: string = 'Pizza';
console.log(todaysTransactions[prop]);

const todaysNet = (transactions: TransactionObj): number => {
    let total = 0;
    for (let prop in transactions) {
        total += transactions[prop];
    }
    return total;
}

console.log(todaysNet(todaysTransactions));

// todaysTransactions.Pizza = 40;

console.log(todaysTransactions['Ali']);


interface Student {
    [key: string]: string | number | number[] | undefined;
    name: string;
    GPA: number;
    classes?: number[];
}

const student: Student = {
    name: 'Ali',
    GPA: 3.5,
    classes: [100, 200]
}

// console.log(student.test);