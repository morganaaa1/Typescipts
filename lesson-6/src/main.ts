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

interface Musician {
    name: string;
    instrument: string;
    play(action: string): string;
}

class Guitarist implements Musician {
    name: string;
    instrument: string;


    constructor(name: string, instrument: string) {
        this.name = name;
        this.instrument = instrument;
    }

    play(action: string) {
        return `${this.name} is ${action} on ${this.instrument}`;
    }
}

const Page = new Guitarist('Jimmy Page', 'Guitar');
console.log(Page.play('playing'));



class Peeps {
    static count: number = 0;

    static getCount(): number {
        return Peeps.count;
    }

    public id: number

    constructor(public name: string){
        this.name = name;
        this.id = ++Peeps.count;
    }

}

const John = new Peeps('John');
const Steve = new Peeps('Steve');
const Amy = new Peeps('Amy');

console.log(John.id);
console.log(Steve.id);
console.log(Amy.id);
console.log(Peeps.count);

class Bands {
    private dataState: string[]

    constructor() {
        this.dataState = [];
    }

    public get data(): string[] {
        return this.dataState;
    }

    public set data(value: string[]) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
            return
        } else throw new Error ('Param must be an array of strings')
    }

}

const MyBands = new Bands()
MyBands.data = ['Neil Young', 'The Beatles', 'The Rolling Stones'];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, 'The Who'];
console.log(MyBands.data);
MyBands.data = ['Herman Li', 'Sam Totman', 'John Petrucci'];