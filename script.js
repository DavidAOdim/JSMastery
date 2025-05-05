console.log("Hello, World!");
console.log("This is a test script.");

let variableName = "This is a variable.";
console.log(variableName); 

let name = "John Doe";
let backticks = `Hello, ${name}, welcome to the world of JavaScript!`;
console.log(backticks);

//objects
let person = {
    name: "David Odim", //key and value pair
    age: 20,
    greet: function() {
        console.log(`Hello, my name is ${this.name}.`);
    }
};

console.log(person); //object
console.log(person.name);``

console.log(person.age);
console.log(person.greet()); //calling the method

//Arrays

let fruits = ["apple", "banana", "cherry"];
console.log(fruits); //array
console.log(fruits[0]); //accessing the first element of the array
console.log(fruits.length); //length of the array
console.log(fruits[fruits.length - 1]); //accessing the last element of the array

let nums = [1, 2, 3, 4, 5];
console.log(nums); //array

const date = new Date(); //creating a date object
console.log(date); //current date and time

//comparision operators => true/false

//functions
function add(a, b) {
    return a + b;
}
console.log(add(5, 10)); //calling the function

function square(num) {
    return num * num;
}

result = square(5); //calling the function
console.log(result); //output of the function

const multiply = (a, b) => {return a * b;} //arrow function