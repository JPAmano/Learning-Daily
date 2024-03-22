// TODO: create a function that add two numbers together

function AddNum(num1, num2, results) {
  num1 = parseInt(document.getElementById("Num1").value);
  num2 = parseInt(document.getElementById("Num2").value);

  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("result").innerHTML = "*Please enter valid numbers";
    document.getElementById("result").style.color = "red";
    return; // Exit the function if either input is not a number
  }

  document.getElementById(
    "output1"
  ).textContent = `${num1} Plus ${num2} equals`;
  document.getElementById("output1").style.color = "orange";

  results = num1 + num2;

  document.getElementById("result").innerHTML = `The answer is: ${results}`;
  document.getElementById("result").style.color = "seagreen";
}
// TODO: create a function that subtract two numbers together

function SubNum(num1, num2, results) {
  num1 = parseInt(document.getElementById("Num1").value);
  num2 = parseInt(document.getElementById("Num2").value);
  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("result").innerHTML = "*Please enter valid numbers";
    document.getElementById("result").style.color = "red";
    return; // Exit the function if either input is not a number
  }

  document.getElementById(
    "output1"
  ).textContent = ` ${num1} Minus ${num2} equals`;
  results = num1 - num2;

  document.getElementById("result").innerHTML = `The answer is: ${results}`;
  document.getElementById("result").style.color = "seagreen";
}
