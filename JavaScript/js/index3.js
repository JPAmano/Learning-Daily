// array of favorite colors
let myArray = ["red", "blue", "yellow"];
let arrayIndex = 0;

// TODO: Loop through all the array of favorite colors
while (arrayIndex < myArray.length) {
  console.log(myArray[arrayIndex]);
  arrayIndex++;
}

// TODO: Loop with function of my numbers
function numbers(index) {
  index = 0;
  while (index < 10) {
    console.log(index);
    index++;
  }
}
numbers();

// TODO: creating a function with variable
let x = myFunc(9, 2);
console.log(Math.sqrt(x));

function myFunc(a, b) {
  return a * b;
}

// TODO: for loop

for (let i = 0; i < 20; i++) {
  console.log("Javascript " + i);
}

// TODO:  get random numbers
function getRandomNum(num1, num2) {
  num1 = 1;
  num2 = 10;

  console.log(Math.round(Math.random(num1, num2) * 10));
}
getRandomNum();

// TODO:  Loop through a string of text

function heroes(myHero, heroIndex) {
  myHero = "Elemental Hero Neos";
  heroIndex = 0;

  while (heroIndex < myHero.length) {
    console.log(myHero.charAt(heroIndex).toUpperCase());
    heroIndex++;
  }
}
heroes();
// End of console log practice
console.log("'End of console log practice'");

document.querySelector("button").onclick = function () {
  document.querySelector("h1").textContent = "Hello, Universe!";
};

document.getElementById("btnTitle").addEventListener("click", function () {
  document.getElementById("title").textContent = "Hello, Universe 7!";
});
