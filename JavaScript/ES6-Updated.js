
// function - A block of code that performs a specific task
// 1.
function print(a, b, c) {
  console.log(a + b + c);
}
print("one", "two", "three"); // one two three

// 2.
var multiply = function (a, b) {
  return a * b; // sends back data when the function is involved
};
var product = multiply(5, 10);
console.log(product); //50
// -----------------------------------------------------------------------------------------------------------------------------------------

// objects
var dog = {
  name: "scooby",
  breed: "golden retreiver",
  weight: "20",
  bark: function () {
    console.log("woof");
  }
};
console.log(dog["breed"]); // golden retreiver
dog.bark(); // woof
// -----------------------------------------------------------------------------------------------------------------------------------------

// Arrays -  allows multiple values in on variable
var points = [3, 4, 5, 6, 7];
points.push(8);
var first = points[0];

function remove() {
  points.pop();
  console.log(points);
}
console.log(points); // 3,4,5,6,7,8
remove(); //3,4,5,6,7
console.log(first); //3
// -----------------------------------------------------------------------------------------------------------------------------------------

// boolean - returns true or false ;
var a = 5 == 5;
console.log(a); //true
// -----------------------------------------------------------------------------------------------------------------------------------------
// if else
//1.
var x = 10;

if (8 > 20) {
  console.log("8 is greater"); //only for true condition
} else if (4 > 40) {
  console.log("20 is greater"); //executes when the above condition is false
} else {
  console.log("nothing is greater"); //executes when neither of the condition
}

//2.
var check = function (number) {
  if (number % 2 == 0) {
    console.log(number + "is even");
  } else {
    console.log(number + "is odd");
  }
};
check(4); //even
check(5); //odd
check(10); //even
// -----------------------------------------------------------------------------------------------------------------------------------------

// do-while
var names = ["alpha", "bravo", "charlie", "delta"];
for (i = 0; i < names.length; i++) {
  console.log(names[i]); //alpha , ....... , delta
}
var i = 0;
do {
  console.log(names[i]); //alpha , ....... , delta
  i++;
} while (i < names.length);

do {
  console.log(names[i]); //alpha
  i++;
} while (i < 0);
// -----------------------------------------------------------------------------------------------------------------------------------------

//ES6

// Transpiler - reads code written in one language and produces equivalent code in another
// (these convert advanced Typescript and coffeScript back to original JS) , Transpiler for ES6 = Babel

// Webpack - It bundles modules into one js file , comes with a dev-server
// -----------------------------------------------------------------------------------------------------------------------------------------

//'const' is read-only and values cannot be changed . However the push and pop will have effect
//let is exactly similar to var , but is accessed only within scope
//1.
let limit = 200;
var limit1 = 200; {
  let limit = 10;
  var limit1 = 10;
  console.log("scope limit", limit); // 10 (let)
  console.log("scope limit", limit1); // 10 (var)
}
console.log("default limit", limit); // 200 (let)
console.log("default limit", limit1); // 10 (var)

//2.
function hello() {
  let message = "hello there";
  console.log(message);
}

function world() {
  let message = "global domination";
  console.log(message);
}
hello(); //hello there
world(); //global domination
// -----------------------------------------------------------------------------------------------------------------------------------------

// Template Strings - strings that embedd expressions within them , created by using ( ` `)
//1.
let a = `good`;
let greeting = `${a} morning`;
console.log(greeting); //good morning

//2.
let b = "birthday";
let c = `Happy ${b}`;
console.log(c); //Happy birthday
// -----------------------------------------------------------------------------------------------------------------------------------------

// 1.Spread operator - allows to handle multiple arguments in an elements
let a = ["a", "b", ...b, "f"];
let b = ["c", "d", "e"];
console.log(a); //a , b , c , d , e , f

// 2. Rest parameter - multiple arguments of a Function into a single array
function collect(...a) {
  console.log(a);
}
collect(1, 2, 3, 4); //1,2,3,4

//3.Destructuring assignment
let z = [4, 5, 6];
let [x, y] = z; // matches the order x[0] = 4, y[1] = 5
console.log(x, y); //4,5

//3.1
let cards = {
  name: "ace",
  number: 1
};
let {
  name,
  number
} = cards;
console.log(name, number); //ace 1

//3.2
let cards2 = {
  name1: "spade",
  number1: 2
};
let name1, number1;
({
  name1,
  number1
} = cards2);
console.log(name1, number1); //spade 2
// -----------------------------------------------------------------------------------------------------------------------------------------

//arrow key uses:
let drive = () => {
  console.log("Truck");
};
drive(); //Truck

//Map methods -  creates a new array by calling a function on individual elements in an original array.
let values = [20, 30, 40];
let doubled = values.map(n => n * 2); //((n) => returns {n * 2})
console.log(doubled); //40 , 60 , 80

//Filter Method - creates a new array based on an original array and a certain test on each of its elements.
let points = [10, 20, 30, 40, 50];
let score = points.filter(n => n > 40); //((n) = > return {n > 40})
console.log(score); //50
// -----------------------------------------------------------------------------------------------------------------------------------------

//Helper Methods

//1. Sting.repeat() - returns a new string of concatenated copies.
let a = `bella ${"caio".repeat(3)}`; // repeats three times
console.log(a); //bella caio caio caio

//2. Searching - used for startsWith , endsWith , includes etc
console.log("sixth sense".startsWith("sixth")); //true
console.log("sixth sense".endsWith("sense")); //true
console.log("sixth sense".includes("sixth")); //true

//3. Number checking - for type and safety (any invalid number) values from user
//1.
const addToCart = (items, number) => {
  return Number.isFinite(number);
};
console.log(addToCart("shirt", Infinity)); //false
console.log(addToCart("shirt", 5)); //true
//2.
const len = number => {
  return Number.isSafeInteger(number);
};
console.log(addToCart(Math.pow(5, 25))); //false
// -----------------------------------------------------------------------------------------------------------------------------------------

//modules -reusable piece of code which Split code into unique files based on relevant data.
// Used in ES6 via the Export and Import Keywords.
const rainbow = [v, i, b, g, y, o, r];
const total = rainbow.length;
export {
  rainbow,
  total
};
//use seperate .js file
import {
  rainbow,
  total
} from "../script.js";
console.log(rainbow, total); // v , i...r , 7

//default - defines a fall back expression for a module when exporting multiple variables
const add = (a, b) => {
  return a + b;
};
const multiply = (a, b) => {
  return a * b;
};
export {
  add,
  multiply
};
export default multiply;

//use seperate .js file
import multiply from "../script.js";
console.log(multiply(5, 10)); //50
// -----------------------------------------------------------------------------------------------------------------------------------------

//class - defined by using a class keyword and uses a constructor . class relate to each other through inheritance
//this - refers to the object that are created within the constructor
class guns {
  constructor(a, b) {
    this.name = a;
    this.accuracy = b;
  }
  ppm() {
    console.log(
      `single shot for ${this.name} with acccuracy of ${this.accuracy}`
    );
  }
}
export default guns;

//use seperate js file
import guns from "..script.js";
class lmg extends guns {
  constructor(name, accuracy, clip) {
    super(name, accuracy); //to acknowledge a parent constructor
    this.clip = c;
  }
  fire() {
    console.log(
      `Lmg gun ${this.name} has ${this.accuracy}accurate and ${this.clip} clips`
    );
  }
}
let aks = new lmg("Automatic", 55, 36);
aks.fire(); //Lmg gun Automatic has 55 accurate and 36 clips
// -----------------------------------------------------------------------------------------------------------------------------------------

//static methods - when creating static methods within a class,
//                 we can access those methods without explicitly declaring the instance of the class

class calculator {
  static multiply(a, b) {
    return a * b;
  }
  static add(a, b) {
    return a + b;
  }
  static sub(a, b) {
    return a - b;
  }
}
let a = calculator.multiply(5, 2);
let b = calculator.add(7, 3);
let c = calculator.sub(12 - 10);
console.log(a); //10
console.log(b); //10
console.log(c); //10
// -----------------------------------------------------------------------------------------------------------------------------------------

//oop concept - objects or classes that hold relevant data and interact each other
// is JS an oop ? - JS is based on a prototypal inheritance model.
//1.It is characteristic of every object js has.(from its parent).classes are extractions on top of JS prototypes.
//2.prototype reveals an object's parent.
//3.all objects are -  arrays ,  dates , etc - have a prototype.

function phone(name, price, model) {
  this.name = name;
  this.price = price;
  this.model = model;
}
phone.prototype.dongle;
phone.prototype.add = function () {
  return `this is ${this.name} priced at ${this.price} for ${this.model} model ${this.dongle}included`;
};
let apple = new phone("iphone", 999, max);
phone.prototype.dongle = "connector";
console.log(apple.add); //this is iphone priced at 999 for max model connector included
// -----------------------------------------------------------------------------------------------------------------------------------------

//data structure and algorithms -
//Set -  It allows to store unique values(no duplicates).  add , delete , has methods are present
//1.1
let a = new Set();
a.add(5);
a.add(10);
a.add("cool");
a.add({
  x: 50,
  y: 200
});
console.log(a.size); //4 (number of elements)
console.log(a.has(5)); // true

//1.2
let numbers = [2, 3, 4, 5, 6];
let numSet = new Set(numbers);
for (let element of numSet.values()) {
  console.log(element);
}
// 1.3 - To seperate unique values from an array
let chars = "asdfdfgh"; //to remove duplicate(df)
let chars_arr = chars.split("");
let chars_set = new Set(chars_arr);
console.log(chars_set); //set{'a','s','d','f','g',',h'}
// -----------------------------------------------------------------------------------------------------------------------------------------

//maps - have keys and values , maps are similar to objects .'superior keys' ,'size property' are some features included .
//  The objects in maps can be function , primitives , objects.

// 1
let a = new Map();
let key_1 = "string key";
let key_2 = {
  a: "key"
};
let key_3 = function () {};

a.set(key_1, "string key value");
a.set(key_2, "object key value");
a.set(key_3, "function key value");
console.log(a); // map {"string key => "string key value", object {a:"key"} =>"object key value", function => "function key value"}

//2
let arr = [
  [1, "one"],
  [2, "two"],
  [3, "three"]
];
let mapping = new Map(arr);
for (let [key, value] of mapping.entries()) {
  console.log(`${key} to ${value}`);
}
//1 to one
//2 to two
//3 to three

// 3 - Returns Number of times a character repeates as a key value pair
let string = "babel";
let letters = new Map();
for (let i = 0; i < string.length; i++) {
  let letters = string[i];
  if (!letters.has(letter)) {
    //letters.has(letters) == false;
    letters.set(letter, 1);
  } else {
    letters.set(letters, letters.get(letter) + 1);
  }
}
console.log(letters);
//0:{"b" =>2}
//1:{"a" =>1}
//2:{"e" =>1}
//3:{"l" =>1}
// -----------------------------------------------------------------------------------------------------------------------------------------

// closures - the functions that remember the environment they are created in,
// and can further reference the independent variables within the environment.
// They enable us to do Function Factories - the functions returning other functions , they enable private data
let call = () => {
  let secret = "Hush";
  let open = () => {
    console.log(secret);
  };
  return open;
};

let unveil = call();
unveil(); //Hush

// function factories - takes one or more arguments and returns a new functions based on those arguments
// 1.
const suffix = x => {
  const concat = y => {
    return y + x;
  };
  return concat;
};
let prefix = suffix("intosh");
let full = prefix("Mac");
console.log(full); //Macintosh

// 2.
const product = x => y => y * x;
let double = product(2);
console.log(double(10)); //20

//Private methods - (Encapusalation) the methods can only be used in the same class they are created in.
//  Done in js by using closures.
const budget = () => {
  let balance = 0;
  let changeBal = (val) => {
    return balance += val;
  }
  const deposit20 = () => changeBal(20);
  const withdraw20 = () => changeBal(-20);
  const check = () => balance;
  return {
    deposit20,
    withdraw20,
    check
  }
}
let wallet = budget();
wallet.deposit20(); //(20)
wallet.withdraw20(); //(0)
wallet.deposit20(); //(20)
wallet.deposit20(); //(40)
console.log(wallet.check()); //40 
// -----------------------------------------------------------------------------------------------------------------------------------------

//Generators - *used as control flow during the run time
//*used to break the typical "run to complete" model for functions.
//*Generators can pause , and resume, with yield and next().
//*It is used to construct functions with controlled-flow and simplified versions of iterators
//syntax: function* functionName (arguments)
//.next() - takes one step , and returns the value of the curret generator

//1.generator yielding count at a time 
function* countMaker() {
  let count = 0;
  while (count < 3) {
    yield count += 1;
  }
}
let countGen = countMaker();
console.log(countGen.next().value); //1
console.log(countGen.next().value); //2
console.log(countGen.next().value); //3
console.log(countGen.next().value); //-undefined-

//2 .List the even numbers starting with 2
function* evens() {
  let count = 0;
  while (true) {
    count += 2;
    let reset = yield count;
    if (reset) {
      count = 0;
    }
  }
}
let sequence = evens();
console.log(sequence.next().value); //2
console.log(sequence.next().value); //4
console.log(sequence.next().value); //6
console.log(sequence.next(true).value); //2
console.log(sequence.next().value); //4

//Iterator - It will access items from an collection or an array , and keeps track of its position.
//1.1 array iteration using iterators
const arrayIterator = (array) => {
  let index = 0;

  return {
    next: () => {
      if (index < array.length) {
        let next = array[index];
        index += 1;
        return next;
      }
    }
  }
}
let iterator = arrayIterator[(1, 2, 3)];
console.log(iterator.next()); //1
console.log(iterator.next()); //2
console.log(iterator.next()); //3

//1.2 array iteration using generators
function* arrayIterator() {
  yield* arguments;
}
var iterator = arrayIterator(1, 2, 3);
console.log(iterator.next().value); //1
console.log(iterator.next().value); //2
console.log(iterator.next().value); //3
// -----------------------------------------------------------------------------------------------------------------------------------------

//synchronous Program - runs in a sequence manner without performing any blocking operations
//Asynchronous Program - diverts all blocking events to the event handlers.
//asynchronous program -  UI and Browsers handle events asynchronously.
//It is used to interact with databases , servers , and public API's 

//Es6 uses promises : 1.Pending , 2.fulfilled , 3.rejected. 
//promises allows asynchronous process on the background while running other code

//Promise-> 1.Resolve:Handlers used to update the state for a successful promise call , 
//          2.Reject:Handles a promises that can't 
// determine a value.

let p = new Promise((resolve, reject) => {
  setTimeout(() => resolve('resolved promise data'), 3000);
})
p.then(response => console.log(response))
  .catch(error => console.log(error));
console.log('After promise');
//After promise
//resolved promise data
// -----------------------------------------------------------------------------------------------------------------------------------------

//HTTP Request Methods   
//GET: Retreives data and has no secondary effect , only viewing is possible 
//POST: sends data to the server to add resources , user can modify data

//ES7 
//1.Expponent operator
//2.more support for arrays
//ES8
//1.more object manipulate with .values() and .entries()
//2.async functions

//To install ES7 => npm install babel-preset-es2016 --save-dev   (in command prompt)

// 1. Replacement for Math.pow();
let a = 2 ** 5;
console.log(a); //32

// 2. includes method
let b = "wonderful".includes("wonder");
let c = [2, 3, 4, 5, 6, 7].includes(9);
console.log(b); //true
console.log(c); //false

//To install ES8 => npm install babel-preset-es2017 --save-dev   (in command prompt)
// 1. objects - provides funcion common to all js Objects
let obj = {
  a: 'one',
  b: 'two',
  c: 'three'
};
let keys = Object.keys(obj);
let values = Object.values(obj);
let entries = Object.entries(obj);
console.log(keys); //[a , b , c ]
console.log(values); //['one' , 'two' , 'three']
console.log(entries); //0:array [2] , 1:array[2] , 2.array[3]

//1.1 For printing the values of the entries present in the above array
let obj = {
  a: 'one',
  b: 'two',
  c: 'three'
};
let entries = Object.entries(obj);
for (let entry of entries) {
  console.log(`key: ${entry[0]} , value: ${entry[1]}`);
}
// key: a, value : one
// key: b, value : two
// key: c, value : three

//Proposal Async
// 1.
async function one() {
  return "one";
}
async function two() {
  throw new Error('Issue with Async!');
}
one().then(response => console.log(response)); //one 
two().catch(error => console.log(error)); //Error: Issue with async!

//1.1
async function one() {
  return "one";
}
async function two() {
  return "two";
}
async function three() {
  const alpha = await one();
  console.log(alpha);
  const bravo = await two();
  console.log(bravo);
}

three(); // one two
