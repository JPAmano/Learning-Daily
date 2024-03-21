// TODO:  My array list of colors
let myColors = ["red", "blue", "yellow", "green"];
let arrayIndex = 0;

// TODO: Looping through of my array using while loop
while (arrayIndex < myColors.length) {
  console.log(arrayIndex + " Color " + myColors[arrayIndex]);
  arrayIndex++;
}
// TODO: loop through a number using while loop and for loop

let myNum = 1;
while (myNum <= 10) {
  console.log("Number " + myNum);
  myNum++;
}
for (let index = 1; index <= 20; index++) {
  console.log("data type " + typeof +" " + " is " + index);
}

// TODO: Looping through a string of text
// It's the same with for LOOP
let Hero1 = "Elemental Hero Avian";
let heroIndex = 0;
while (heroIndex < Hero1.length) {
  console.log(Hero1.charAt(heroIndex).toUpperCase());
  heroIndex++;
}
// TODO: Loop with function

function loopNum(a, b, c) {
  c = a + b;
  while (c <= 30) {
    console.log(c);
    c++;
  }
}
loopNum(5, 2);

// TODO: creating a variable with function

let x = myFunc(2, 5);
console.log(x);

function myFunc(a, b) {
  return a + b;
}
console.log("End of practice 1.....");

/* DOM Manipulation */

// TODO: QUERY Selector
// document.querySelector("button").onclick = function () {
//   document.querySelector("h1").textContent = "Hello, Mars 🪼";
// };
// TODO: See if Planet is in Earth

document
  .querySelector("button")
  .addEventListener("click", function checkPlanets(planet1, planet2) {
    planet1 = "Earth";
    planet2 = "Jupiter";
    if (planet1 === "Earth" && planet2 === "Mars") {
      document.querySelector("h1").textContent =
        "Welcome to planet, " + planet1 + " and " + planet2;
    } else if (planet1 === "Earth" && planet2 != "Mars") {
      document.querySelector("h1").textContent =
        planet2 + " is not available here ";
    } else {
      document.querySelector("h1").textContent = "You don't belong here";
    }
  });

// TODO:  role a dice

function getNum(num1, num2) {
  num1 = 1;
  num2 = 6;

  let randomNum;
  let output;

  randomNum = Math.random(num1, num2);
  output = document.getElementById("secondHeader").textContent = randomNum;
}
// TODO: Add two numbers in Dom
function AddNum(one, two) {
  one = 5;
  two = 5;

  document.querySelector("span").textContent = one + two;
}

function displayName(myName) {
  myName = "Jaden";

  document.getElementById("output").textContent = `Hello, ${myName}`;
}
