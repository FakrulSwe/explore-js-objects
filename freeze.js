const bottle = {
    color : 'yellow',
    price: 50,
    isCleaned: true,
    capacity: 1
}

const keys = Object.keys(bottle);
// console.log(keys);
const values = Object.values(bottle);
// console.log(values);

const pair = Object.entries(bottle);
// console.log(pair);

// Object.seal(bottle);
// Object.freeze(bottle);
bottle.weight = 500;
// delete bottle.isCleaned;
// console.log(bottle);

// for in loop
for(const key in bottle){
    const value = bottle [key];
    // console.log(value);
}


// for of loop
const numbers =[25, 20, 10, 65];
for(const num of numbers){
    // console.log(num);
}

// document.getElementById().addEventListener()

const obj ={a:1, b:7, c:3, length:2};
// console.log(Object.keys(obj).length);


