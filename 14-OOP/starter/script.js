'use strict';

const Person = function(firstName, birthYear){
	this.firstName = firstName;
	this.birthYear = birthYear;
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('jack', 1975);

console.log(jonas instanceof Person);

//Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function(){
	console.log(2036 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.pieces = 'Homo sapiens';
console.log(jonas.__proto__.__proto__.__proto__);
const h1 = document.querySelector('h1');
console.dir(h1);
console.dir((x)=>x+1);

//Coding challenge
const Car = function(speed){
	this.speed = speed;
}

Car.prototype.accelerate = function(){
	this.speed += 10;
	console.log(this.speed);
}

Car.prototype.break = function(){
	this.speed -= 5;
	console.log(this.speed);
}

const bmw = new Car(10);
bmw.accelerate();
bmw.break();
bmw.break();