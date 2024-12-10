// Function Declaration
// This function is declared using the `function` keyword and can be called before its declaration due to hoisting.
function functionDeclaration() {
    console.log("Function Declaration executed");
}

// Function Expression
// This function is stored in a variable and cannot be called before its declaration.
const functionExpression = function (a, b) {
    return a * b;
};

// Arrow Function
// A concise way to write functions. It does not have its own `this` context.
const arrowFunction = (a, b) => a * b;

// IIFE (Immediately Invoked Function Expression)
// A function that is executed immediately after it is defined.
(function () {
    console.log("IIFE executed");
})();

// Method
// A function associated with an object.
const objectWithMethod = {
    key1: "value1",
    key2: "value2",
    method() {
        console.log("Method executed");
    }
};

// Constructor Function
// Used to create objects with properties and methods.
function ConstructorFunction() {
    this.key1 = "value1";
    this.key2 = "value2";
}

// Callback Function
// A function passed as an argument to another function.
function callbackFunctionExample(callback) {
    console.log("Callback Function executed");
    callback();
}

// Higher Order Function
// A function that takes another function as an argument or returns a function.
function higherOrderFunction(callback) {
    console.log("Higher Order Function executed");
    callback();
}

// Anonymous Function
// A function without a name, often used as a callback or assigned to a variable.
const anonymousFunction = function () {
    console.log("Anonymous Function executed");
};

// Generator Function
// A function that can pause execution and resume later, using `yield`.
function* generatorFunction() {
    yield "First value";
    yield "Second value";
    return "Done";
}

// Recursive Function
// A function that calls itself to solve a problem in smaller steps.
function recursiveFunction(n) {
    if (n <= 0) {
        return;
    }
    console.log(n);
    recursiveFunction(n - 1);
}

// Pure Function
// A function that does not depend on or modify external state. Its output depends only on its input.
function pureFunction(a, b) {
    return a + b;
}

// Impure Function
// A function that modifies external state or depends on it.
let impureCounter = 0;
function impureFunction() {
    impureCounter++;
    return impureCounter;
}

// Curried Function
// A function that takes one argument at a time and returns another function.
function curriedFunction(a) {
    return function (b) {
        return a * b;
    };
}

// Function with Parameters
// A function that accepts parameters as input.
function functionWithParameters(a, b) {
    return a + b;
}

// Function with Arguments
// Similar to parameters but refers to the actual values passed to the function.
function functionWithArguments(a, b) {
    return a - b;
}

// Function with Return
// A function that returns a value to the caller.
function functionWithReturn() {
    return "This is a return value";
}

// Function Call
// Invoking or executing a function.
function functionCallExample() {
    console.log("Function Call executed");
}

// Function Apply
// Calls a function with a given `this` value and arguments provided as an array.
function functionApplyExample(a, b) {
    console.log(a + b);
}
functionApplyExample.apply(null, [5, 10]);

// Function Bind
// Creates a new function with a specific `this` value and optional arguments.
const boundFunction = functionCallExample.bind(null);
boundFunction();

// Function Call
// Calls a function with a given `this` value and arguments provided one by one.
functionCallExample.call(null);

// Function Constructor
// Creates a new function dynamically. Rarely used in modern JavaScript.
const constructedFunction = new Function("a", "b", "return a + b;");
console.log(constructedFunction(5, 10));

// Function Prototype
// Functions can have properties and methods added using prototypes.
function FunctionWithPrototype() { }
FunctionWithPrototype.prototype.greet = function () {
    console.log("Hello from prototype!");
};

// Arrow Function (again)
const anotherArrowFunction = () => {
    console.log("Another Arrow Function executed");
};

// Generator Function (again)
function* anotherGeneratorFunction() {
    yield "Start";
    yield "Middle";
    yield "End";
}