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
console.log(HermanLi.age);
console.log(HermanLi.lang);