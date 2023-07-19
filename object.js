// 1.create object using object literals
const player = {};
// properties
player.name = 'Rupok'; 
player.specialty = 'Software Engineer';
// method
player.code = function(){
    console.log('Practice code');
}
// console.log(player);
// player.code();


// 2.object constructor
const person = new Object();
// console.log(person);


// 3.object create method
const item = Object.create(player);
// console.log(item.name);


// 4.class
class Person {
    name = 'abul';
    address = 'sodor ghat';
    constructor(age){
        this.age = age;
    }
}

const Person1 = new Person(56);
console.log(Person1);
console.log(typeof Person1);