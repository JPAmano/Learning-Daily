document.querySelector("body").style.backgroundColor = "beige";

function getName() {
  let name = document.getElementById("Name").value;
  document.getElementById("headerOutput").innerHTML = "Hello, " + name;
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
