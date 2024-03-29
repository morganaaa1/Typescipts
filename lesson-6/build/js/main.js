"use strict";
class Coder {
    constructor(name, music, age, lang = 'TypeScript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I'm ${this.age}`;
    }
}
const HermanLi = new Coder('Herman Li', 'Rock', 30);
console.log(HermanLi.getAge());
// console.log(HermanLi.age);
// console.log(HermanLi.lang);
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write code in ${this.lang}`;
    }
}
const Sara = new WebDev('MacBook Pro', 'Sara', 'Pop', 25);
console.log(Sara.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} is ${action} on ${this.instrument}`;
    }
}
const Page = new Guitarist('Jimmy Page', 'Guitar');
console.log(Page.play('playing'));
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps('John');
const Steve = new Peeps('Steve');
const Amy = new Peeps('Amy');
console.log(John.id);
console.log(Steve.id);
console.log(Amy.id);
console.log(Peeps.count);
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
            return;
        }
        else
            throw new Error('Param must be an array of strings');
    }
}
const MyBands = new Bands();
MyBands.data = ['Neil Young', 'The Beatles', 'The Rolling Stones'];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, 'The Who'];
console.log(MyBands.data);
MyBands.data = ['Herman Li', 'Sam Totman', 'John Petrucci'];
