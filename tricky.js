1. Explain the 'this' keyword in JavaScript.
          The this keyword refers to the object that is executing the current function.
Example:

const person = {
    name: 'John',
    greet: function() {
        console.log(this.name);
    }
};
person.greet(); // Output: John
const greet = person.greet;
greet(); // Output: undefined (or Error in strict mode)

Explanation:
In the first call, this refers to the person object. In the second call, this refers to the global object (or undefined in strict mode).

2. What is a closure in JavaScript?
        A closure is a function that remembers its outer variables and can access them.

Example:

function outerFunction() {
    let outerVariable = 'I am from outer function';

    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction;
}

const innerFunc = outerFunction();
innerFunc(); // Output: I am from outer function

Explanation:
innerFunction forms a closure that keeps a reference to outerVariable even after outerFunction has finished execution.

3. What is the difference between == and === in JavaScript?
          == is the equality operator that performs type coercion, while === is the strict equality operator that does not perform type coercion.

Example:

console.log(1 == '1');  // Output: true
console.log(1 === '1'); // Output: false

Explanation:
1 == '1' is true because == converts the string to a number before comparison. 1 === '1' is false because the types are different.

4. How do you create a private variable in JavaScript?
          You can create a private variable using closures.

Example:

function createCounter() {
    let count = 0;

    return {
        increment: function() {
            count++;
            console.log(count);
        },
        decrement: function() {
            count--;
            console.log(count);
        }
    };
}

const counter = createCounter();
counter.increment(); // Output: 1
counter.increment(); // Output: 2
counter.decrement(); // Output: 1

Explanation:
The count variable is private to the createCounter function and can only be accessed or modified by the increment and decrement functions.

5. What is the event loop in JavaScript?
          The event loop is a mechanism that allows JavaScript to perform non-blocking operations by offloading operations to the system kernel whenever possible.

Example:

console.log('Start');

setTimeout(() => {
    console.log('Timeout');
}, 0);

console.log('End');

Explanation:
The output will be:
Start
End
Timeout

This is because the setTimeout function is non-blocking and the callback is executed after the main thread is free.

6. What are Promises and how do they work?
          Promises are used to handle asynchronous operations in JavaScript. They have three states: pending, fulfilled, and rejected.

Example:

let promise = new Promise((resolve, reject) => {
    let success = true; // Change to false to see rejection

    if (success) {
        resolve('Operation was successful');
    } else {
        reject('Operation failed');
    }
});

promise.then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
});

Explanation:
If success is true, the promise is resolved and "Operation was successful" is logged. If success is false, the promise is rejected and "Operation failed" is logged.

7. What is the difference between let, const, and var?
        var: Function-scoped, can be re-declared and updated.

        let: Block-scoped, cannot be re-declared but can be updated.

        const: Block-scoped, cannot be re-declared or updated.

Example:

function test() {
    if (true) {
        var varVariable = 'var';
        let letVariable = 'let';
        const constVariable = 'const';
    }

    console.log(varVariable); // Output: var
    console.log(letVariable); // ReferenceError
    console.log(constVariable); // ReferenceError
}

Explanation:
varVariable is accessible outside the if block because var is function-scoped. letVariable and constVariable are not accessible outside the if block because they are block-scoped.

8. What is the output of the following code?

console.log(0.1 + 0.2 === 0.3);
Answer:
false
Explanation:
Due to floating-point precision, 0.1 + 0.2 results in 0.30000000000000004, which is not strictly equal to 0.3.

9. What will be the output of the following code and why?
var a = 10;
(function () {
    console.log(a);
    var a = 20;
    console.log(a);
})();
Answer:
undefined
20
Explanation:
Due to variable hoisting, the declaration var a is moved to the top of the function scope, but its initialization remains in place. Therefore, console.log(a) prints undefined before a is assigned 20.

10. What is the difference between null and undefined in JavaScript?
Answer:
null is an assigned value. It means nothing.
undefined means a variable has been declared but has not yet been assigned a value.
Example:
let a;
console.log(a); // Output: undefined

let b = null;
console.log(b); // Output: null
Explanation:
a is declared but not assigned, so it is undefined. b is explicitly assigned null.

11. What is the purpose of the bind method in JavaScript?
Answer:
The bind method creates a new function that, when called, has its this keyword set to the provided value.

Example:
const person = {
    name: 'Alice',
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

const greet = person.greet.bind(person);
greet(); // Output: Hello, my name is Alice
Explanation:
The bind method ensures that the this keyword inside greet always refers to the person object.

12. Explain event delegation in JavaScript.
Answer:
Event delegation is a technique involving event bubbling to handle events at a higher level in the DOM than the element on which the event originated.

Example:
<ul id="parentList">
    <li class="child">Item 1</li>
    <li class="child">Item 2</li>
    <li class="child">Item 3</li>
</ul>
<script>
    document.getElementById('parentList').addEventListener('click', function(event) {
        if (event.target && event.target.matches('li.child')) {
            console.log('List item clicked: ' + event.target.textContent);
        }
    });
</script>
Explanation:
The click event listener is attached to the parent ul element. When a li element is clicked, the event bubbles up to the ul, and the event listener checks if the clicked target matches the specified selector.

13. How can you create a deep copy of an object in JavaScript?
Answer:
You can create a deep copy using JSON.parse and JSON.stringify, or by using a recursive function for more complex objects.

Example:
const original
object = {
name: 'Alice',
age: 30,
address: {
city: 'Wonderland',
zip: 12345
}
};

 // Deep copy using JSON methods
 const deepCopy = JSON.parse(JSON.stringify(original));

 console.log(deepCopy); // Output: { name: 'Alice', age: 30, address: { city: 'Wonderland', zip: 12345 } }

 // Modifying the deep copy
 deepCopy.address.city = 'New Wonderland';

 console.log(original.address.city); // Output: 'Wonderland'
 console.log(deepCopy.address.city); // Output: 'New Wonderland'
 ```
Explanation:
Using JSON.parse(JSON.stringify()) creates a deep copy by serializing the object to a JSON string and then parsing it back into a new object. This method doesn't work well with functions or special objects like Date and RegExp.
14. What will be the output of the following code and why?
function foo() {
    return {
        bar: "hello"
    };
}

function baz() {
    return
    {
        bar: "hello"
    };
}

console.log(foo()); // Output: { bar: "hello" }
console.log(baz()); // Output: undefined
Explanation:
In foo(), the object is correctly returned because it is on the same line as the return statement. In baz(), the return statement is followed by a newline, which JavaScript interprets as the end of the statement, so it effectively returns undefined.
15. What are Immediately Invoked Function Expressions (IIFE) and why might you use them?
Answer:
An IIFE is a function that is executed immediately after its creation. It is used to avoid polluting the global scope and to create a private scope for variables.

Example:
(function() {
    var privateVariable = 'I am private';
    console.log(privateVariable);
})();
Explanation:
The function is defined and immediately executed. The variables inside the IIFE are not accessible from outside, creating a private scope.

16. What is the difference between call, apply, and bind methods in JavaScript?
Answer:

call: Invokes the function immediately, allowing you to pass arguments one by one.
apply: Invokes the function immediately, but arguments are passed as an array.
bind: Returns a new function, allowing you to pass arguments one by one or partially apply arguments.
Example:
function greet(greeting, punctuation) {
    console.log(`${greeting}, my name is ${this.name}${punctuation}`);
}

const person = { name: 'Alice' };

greet.call(person, 'Hello', '!'); // Output: Hello, my name is Alice!
greet.apply(person, ['Hi', '?']); // Output: Hi, my name is Alice?
const boundGreet = greet.bind(person, 'Hey');
boundGreet('!!!'); // Output: Hey, my name is Alice!!!
Explanation:
call and apply invoke the function with the specified this value and arguments immediately. bind returns a new function that can be called later with the specified this value and arguments.

17. What is a higher-order function in JavaScript?
Answer:
A higher-order function is a function that takes another function as an argument, returns a function, or both.

Example:
function higherOrderFunction(callback) {
    return function(x) {
        return callback(x);
    };
}

function square(x) {
    return x * x;
}

const squaredFunction = higherOrderFunction(square);
console.log(squaredFunction(5)); // Output: 25
Explanation:
higherOrderFunction takes a function callback as an argument and returns a new function. The returned function calls callback with the given argument.

18. What is function currying in JavaScript?
Answer:
Function currying is the process of transforming a function that takes multiple arguments into a sequence of functions that each take a single argument.

Example:
function curry(f) {
    return function(a) {
        return function(b) {
            return f(a, b);
        };
    };
}

function add(a, b) {
    return a + b;
}

const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)); // Output: 3
Explanation:
curry transforms the add function into a curried version. curriedAdd(1)(2) is equivalent to add(1, 2).

19. Explain the concept of prototypal inheritance in JavaScript.
Answer:
Prototypal inheritance is a feature in JavaScript where objects can inherit properties and methods from other objects.

Example:
const parent = {
    greet: function() {
        console.log('Hello from parent');
    }
};

const child = Object.create(parent);
child.greet(); // Output: Hello from parent
Explanation:
Object.create(parent) creates a new object child with parent as its prototype. child inherits the greet method from parent.

20. What is the output of the following code and why?
var a = 1;
function b() {
    a = 10;
    return;
    function a() {}
}
b();
console.log(a);
Answer:
1
Explanation:
Inside the function b, function a() {} is hoisted to the top, so a within the function scope refers to this hoisted function, not the global variable a. Therefore, a = 10 inside b assigns 10 to the local a, leaving the global a unchanged.

21. What is the output of the following code and why?
console.log(typeof null);
console.log(typeof undefined);
console.log(null instanceof Object);
Answer:
javascript
Copy code
"object"
"undefined"
false
Explanation:
typeof null returns "object" because of a bug in the original implementation of JavaScript.
typeof undefined returns "undefined" as expected.
null is not an instance of Object, so null instanceof Object returns false.
22. How can you check if a property exists in an object?
Answer:
You can use the in operator, the hasOwnProperty method, or check for undefined.

Example:
const obj = { key: 'value' };

console.log('key' in obj); // true
console.log(obj.hasOwnProperty('key')); // true
console.log(obj.key !== undefined); // true
Explanation:
'key' in obj checks if key exists in obj, including properties in the prototype chain.
obj.hasOwnProperty('key') checks if key exists directly on obj, not in the prototype chain.
obj.key !== undefined checks if the key exists and is not undefined.
23. Explain the difference between synchronous and asynchronous code in JavaScript.
Answer:
Synchronous code: Executes line by line, one operation at a time.
Asynchronous code: Allows multiple operations to happen at once. It uses mechanisms like callbacks, promises, and async/await to handle operations that take time, such as network requests.
Example:
// Synchronous code
console.log('Synchronous code start');
for (let i = 0; i < 3; i++) {
    console.log(i);
}
console.log('Synchronous code end');

// Asynchronous code
console.log('Asynchronous code start');
setTimeout(() => {
    console.log('Inside setTimeout');
}, 0);
console.log('Asynchronous code end');
Explanation:

The synchronous code block runs sequentially.
The asynchronous code block starts the timeout operation but immediately moves to the next line, logging 'Asynchronous code end' before 'Inside setTimeout' because setTimeout is non-blocking.
24. What is the output of the following code and why?
const obj = {
    foo: function() {
        console.log(this);
    }
};

const bar = obj.foo;
bar();
Answer:
window // or global object in Node.js
Explanation:
bar is a reference to obj.foo but when it is called, it is not called as a method of obj. Thus, this inside foo refers to the global object.

25. What is the purpose of the Symbol type in JavaScript?
Answer:
Symbols are unique and immutable primitive values used as unique identifiers for object properties. They avoid property name collisions.

Example:
const sym1 = Symbol('description');
const sym2 = Symbol('description');

console.log(sym1 === sym2); // false

const obj = {
    [sym1]: 'value1',
    [sym2]: 'value2'
};

console.log(obj[sym1]); // Output: 'value1'
console.log(obj[sym2]); // Output: 'value2'
Explanation:
sym1 and sym2 are unique symbols, even though they have the same description. They can be used as property keys without risk of collision.

26. What are the advantages and disadvantages of using Arrow Functions?
Advantages:
Shorter syntax: Arrow functions are more concise.
Lexical this binding: Arrow functions do not have their own this context; they inherit this from the enclosing scope.
Disadvantages:
Cannot be used as constructors: Arrow functions do not have a prototype property.
No arguments object: Arrow functions do not have their own arguments object.
Example:
function Person() {
    this.age = 0;

    setInterval(() => {
        this.age++;
        console.log(this.age);
    }, 1000);
}

const person = new Person();
Explanation:
The arrow function inside setInterval inherits this from the Person constructor function, so this.age correctly refers to the age property of the person instance.

27. What is the output of the following code and why?
const arr = [1, 2, 3, 4, 5];
const newArr = arr.map((num, index, array) => {
    array[index + 1]--;
    return num;
});

console.log(newArr); // ?
console.log(arr); // ?
Answer:
[1, 2, 3, 4, 5]
[1, 1, 2, 3, 4]
Explanation:
The map method creates a new array with the results of calling a provided function on every element in the calling array. The newArr will be [1, 2, 3, 4, 5] because map returns the current element (num). However, arr is modified because the array parameter in map is the original array, and array[index + 1]-- decrements the next element in the original array.

28. What is the output of the following code and why?
const myObject = {
    foo: "bar",
    func: function() {
        const self = this;
        console.log("outer func: this.foo = " + this.foo);
        console.log("outer func: self.foo = " + self.foo);
        (function() {
            console.log("inner func: this.foo = " + this.foo);
            console.log("inner func: self.foo = " + self.foo);
        }());
    }
};

myObject.func();
Answer:
outer func: this.foo = bar
outer func: self.foo = bar
inner func: this.foo = undefined
inner func: self.foo = bar
Explanation:
In the outer function, this refers to myObject, so this.foo and self.foo both access myObject.foo. In the inner function (IIFE), this refers to the global object (or undefined in strict mode), but self retains the reference to myObject, so self.foo still accesses myObject.foo.

29. Explain the difference between shallow and deep copying in JavaScript.
Answer:
Shallow Copy: Copies the object's top-level properties but not nested objects.
Deep Copy: Copies the object and all nested objects recursively.
Example:
const original = {
    name: 'Alice',
    address: {
        city: 'Wonderland'
    }
};

// Shallow copy
const shallowCopy = { ...original };
shallowCopy.address.city = 'New Wonderland';

console.log(original.address.city); // Output: 'New Wonderland'

// Deep copy
const deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.address.city = 'Old Wonderland';

console.log(original.address.city); // Output: 'New Wonderland'
Explanation:
The shallow copy only copies the reference to the address object, so changes affect the original. The deep copy creates a completely new object, so changes do not affect the original.

30. What is memoization in JavaScript and how is it implemented?
Answer:
Memoization is an optimization technique where you store the results of expensive function calls and return the cached result when the same inputs occur again.

Example:

function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            return cache[key];
        } else {
            const result = fn(...args);
            cache[key] = result;
            return result;
        }
    };
}

function slowFunction(num) {
    for (let i = 0; i < 1e9; i++) {} // Simulate a time-consuming computation
    return num * 2;
}

const memoizedFunction = memoize(slowFunction);
console.log(memoizedFunction(5)); // Takes time on first call
console.log(memoizedFunction(5)); // Returns immediately from cache
Explanation:
The memoize function returns a new function that checks if the result for given arguments is already cached. If so, it returns the cached result; otherwise, it computes the result, stores it in the cache, and returns it.
