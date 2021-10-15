const myInt = 5;
let myString = `My integer is ${myInt}!`;

const myFunction = function foo(myString2) {
  myString = myString2;

  return myString;
};

console.log(myFunction("Hello World"));
