// function - A block of code that performs a specific task
function print(a,b,c) {
    console.log(a+b+c);
}
print("one","two","three"); // one two three

// ------------------------------------------------------------------
var multiply = function (a,b) {
    return a*b; // sends back data when the function is involved
}
var product = multiply(5,10);
console.log(product);
//-------------------------------------------------------------------

// objects
var dog = {
    name: 'scooby',
    breed: 'golden retreiver',
    weight: '20',
    bark: function() {
        console.log("woof");
    }
};
console.log(dog["breed"]); // golden retreiver
dog.bark(); // woof
// ------------------------------------------------------------------





