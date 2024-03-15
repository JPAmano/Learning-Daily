// TODO: first step
function getAge(humanAge, dogAge, finalAge) {
  parseInt((humanAge = document.getElementById("humanYrs").value));
  parseInt((dogAge = document.getElementById("dogYrs").value));

  finalAge = humanAge * dogAge;

  document.getElementById(
    "output"
  ).innerHTML = `${humanAge} years old human,  is equivalent to ${finalAge} years old of Dog`;
}
