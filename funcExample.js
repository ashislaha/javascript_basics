
// normal way to define a func

function greetOnly() {
    console.log("Hello world");
}

const anotherGreet = () => {
    console.log("Hello world again!");
}

// we can pass a function as a parameter of another function
// it's very similar to completion handler in swift
timeOutGreet(greetOnly, 100);
timeOutGreet(anotherGreet, 300);
timeOutGreet(() => {
    console.log("annonymous func")
}, 400);

// Implementation
function timeOutGreet(inputFunction, number) {
    console.log("Number:", number);
    inputFunction(); // executing the function
}

// nested function
function outerFunction() {
    function innerFunction() {
        console.log("inner function");
    }

    // you can call it inside but not outside
    innerFunction();
}

outerFunction(); // It will call inner function



