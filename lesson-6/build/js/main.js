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
