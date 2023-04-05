class Coder {

    secondLang!: string;

    constructor(
        public readonly name: string, 
        public music: string, 
        private age: number, 
        protected lang: string = 'TypeScript'
        ) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }

    public getAge() {
        return `Hello, I'm ${this.age}`
    }

}

const HermanLi = new Coder('Herman Li', 'Rock', 30);
console.log(HermanLi.getAge());
// console.log(HermanLi.age);
// console.log(HermanLi.lang);

class WebDev extends Coder {
    constructor(
        public computer: string,
        name: string,
        music: string,
        age: number,
        ){
            super(name, music, age);
            this.computer = computer;
    }

    public getLang() {
        return `I write code in ${this.lang}`;
    }

}

const Sara = new WebDev('MacBook Pro', 'Sara', 'Pop', 25);
console.log(Sara.getLang());
// console.log(Sara.age);
// console.log(Sara.lang);