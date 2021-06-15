function A() { ... }
function B() { ... }

let a = new A;
let b = new B;

alert( a == b ); // true

// Is it possible to create functions A and B such as new A()==new B()?

// If it is, then provide an example of their code.

function a(value) {
  value = 1;
}

function b(value) {
  value = 2;
}

let a = new A;
let b = new B;
let B = new A;

// Solution 


let obj = {};

function A() { return obj; }
function B() { return obj; }

alert( new A() == new B() ); // true

