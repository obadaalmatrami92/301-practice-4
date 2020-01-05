`use strict`;

let file = require('./a.json')
let allInfo = new About(file)

function About(data) {
    this.name = data.name
    this.pets = data.pets
    this.children = JSON.stringify(data.children)
    this.job = data.job
}

About.prototype.list = function() {
    console.log(`name: ${this.name}, pets: ${this.pets},children: ${this.children}, job: ${this.job}`);

}

allInfo.list()

let arr = allInfo.pets

var result = (char) => {
    return arr.filter(element => element.indexOf(char) > -1);
}

console.log(result('R'));

function Person(name, age) {
    this.name = name
    this.age = age
    this.dogAge = age * 7
    Person.all.push(this)
}
Person.all = []

let zach = new Person(Object.keys(file.children)[0], Object.values(file.children)[0].age)
let allie = new Person(Object.keys(file.children)[1], Object.values(file.children)[1].age)


Person.prototype.dogYear = function() {
    let dogAge = this.age * 7
    console.log(` ${dogAge}`);
}

zach.dogYear();
allie.dogYear();

console.log(Person.all);