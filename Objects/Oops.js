class Person {
    #name;
    #age;
    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }
    getName() {
        return this.#name
    }
    getAge() {
        return this.#age
    }
    display() {
        console.log(`Person ${this.getName()} "is ${this.getAge()} years old"`);
    }
}
let result = new Person(`Narendra`, 25);
console.log(result.getName());
console.log(result.getAge());
result.display();