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
// console.log(Sara.age);
// console.log(Sara.lang);
