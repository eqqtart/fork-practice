/* let is used instead of var in this  */

let age = "20";

if (age = 20) {
  console.log("You are twenty years old!");
} else {
  console.log("You are not twenty.");
}

let favouriteColour = "blue";

switch(favouriteColour) {
  case "red":
    console.log("You like red.");
    break;
  case "blue":
    console.log("You like blue.");
    break;
  case "green":
    console.log("You like green.");
    break;
  default:
    console.log("I don't know that colour.");
}

let number1 = 10;
let number2 = 5;

if (number1 > number2) {
  console.log("Number 1 is bigger.");
} else {
  console.log("Number 2 is bigger or equal.");
}

let total = 10 + 5;

console.log("The total is " + total);
