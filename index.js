
// import and export should work when we use type 'module'
function greet(name) {
    console.log('hello world inside index.js ' + name );
}
greet("Ashis");

let car = {
    "name": "HR-V",
    "company": "Honda",
    "interior": {
        "color": "gray",
        "window": 4
    },
    "exterior": {
        "color": "black",
        "wheels": 4
    },
    "place": "Honda of seattle",
}

console.log("car interior color: " + car.interior.color + "\n");

// stringfy the object (convert the object into string format)
let stringfyObj = JSON.stringify(car);
console.log(typeof(stringfyObj));
console.log(stringfyObj);

// copy an object
let copyObject = JSON.parse(stringfyObj);
console.log(copyObject);

var people = [{
    "name": "Ashis",
    "company": "Microsoft",
    "place": "Redmond"    
}, {
    "name": "Barnali",
    "company": "WholeFoods",
    "place": "Redmond WA"  
}];

// pass a person name and find out where he/she works
function lookupInsidePeople(name, attribute) {
    let companyName = "Not found";
    for (let i = 0; i< people.length; i++) {
        if (people[i].name === name) {
            // verify whether that attribute is present or not
            if (people[i].hasOwnProperty(attribute)) {
                companyName = people[i][attribute];
            }
            break;
        }
    }

    return companyName
}

console.log(lookupInsidePeople("Ashis", "place"));


// var can be defined multiple times and compiler is fine with it
// but you cannot create 2 variable name using let key-word within the same scope,
// compiler will not allow it. It's good practice.
// apart from that var is still accessibile from its scope where it is defined. But let will throw an error.
// const <-- it is read only constant and we cannot change it.
function testingVariableAndLet() {
    "use strict;"
    let i = "function scope";
    if (true) {
        let i = "block scope";
        console.log("inside block: " + i);
    }
    console.log("outside block: " + i);
}

function testingVariable() {
    "use strict";
    if (true) {
        var i = "block scope";
        console.log("inside block: " + i);
    }
    console.log("outside block: " + i); // i is defined inside if block but it is still accessible.
}

testingVariableAndLet()
testingVariable()

// if we define an object with const then we cannot re-assign a new object with that variable
// but we can still change the property
// but with Object.freeze(variable_name), we can freeze the object and we cannot change its properties.


// annonymous function
let magic = (number1, number2) => {
    console.log("this is an annonymous function");
    return number1 + number2;
}

console.log(magic(12, 13));

// default value of a function parameter
let increment = (number, incrementVal = 1) => {
    return number + incrementVal;
}
console.log(increment(3,2));
console.log(10);

// we can define some function as export so that it can be re-used in another file.
function addition(num1, num2) { 
    return num1 + num2;
}

function multiply(num1, num2 = 1) {
    return num1 * num2;
}

console.log(multiply("100", "10")); // it converts string into number and do multiply

// export default "apikey"; // should have one default export
// let httpKey = "httpKey";

// arrow function -- annonymous function
(username, message) => {
    console.log("this is an annonymous function for " + user + " with message: " + message);
}