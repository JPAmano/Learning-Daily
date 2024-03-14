document.querySelector("body").style.backgroundColor = "beige";

// TODO:  "Get name and display the output"
function getName() {
  let name = document.getElementById("Name").value;
  document.getElementById("headerOutput").innerHTML = "Hello, " + name;
}
//  TODO: Get the number and get its square root
function getNum() {
  let num1 = document.getElementById("Number").value;
  document.getElementById("headerOutput2").innerHTML =
    "You choose number," +
    num1 +
    "the square root of that number is, " +
    Math.sqrt(num1);
}
// TODO: Get the two numbers and ADD them together
function getSum(num1, num2, result) {
  num1 = parseInt(document.getElementById("number1").value);
  num2 = parseInt(document.getElementById("number2").value);
  result = num1 + num2;
  document.getElementById("sumResult").innerHTML = result;
}

// TODO: Get the two numbers and MULTIPLY them together
function getquotient(num1, num2, result) {
  num1 = parseInt(document.getElementById("number1").value);
  num2 = parseInt(document.getElementById("number2").value);
  result = num1 * num2;
  document.getElementById("sumResult").innerHTML = result;
}
let myArray = ["red", "blue", "orange", "green"];
let arrayIndex = 0;

function getColors() {
  while (arrayIndex < myArray.length) {
    console.log(myArray[arrayIndex]);
    arrayIndex++;
  }
}
getColors();

let character = "Jaden Yuki";
for (let i = 0; i < character.length; i++) {
  console.log(character.charAt(i).toUpperCase());
}

let x = myFunc(6, 5);
// console.log(x);

function myFunc(a, b, c) {
  c = a * b;
  console.log("6 x 5 is =  " + c);

  console.log("Square Root of, " + c + " is, " + Math.sqrt(c));
}

let output;

function sampleFunction(num1, num2) {
  //   num1 = 5;
  //   num2 = 10;
  //   result = num1 + num2;

  //   console.log(result);

  console.log(num1 * num2);
}

sampleFunction(12, 5);
