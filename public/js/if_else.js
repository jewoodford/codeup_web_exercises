"use strict";

// ignore these lines for now
// just know that the variable 'color' will end up with a random value from the colors array
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random()*colors.length)];
var message;
var favorite = 'violet'; // TODO: change this to your favorite color from the list

console.log("random color chosen was " + color)
console.log("My favorite color is " + favorite)

if (color == "red") {
	console.log("Blood is red.");
} else if (color =="orange") {
	console.log("Oranges are....take a guess.");
} else if (color == "yellow") {
	console.log("Lemons are yellow.");
} else if (color == "blue") {
	console.log("Water is blue.");
} else if (color == "green") {
	console.log("Grass is green.");
} else {
	console.log("I do not know anything by that color.");
}

message = (color == favorite) ? "It matches" : "It doesn't match";
console.log(message);

// TODO: Create a block of if/else statements to check for every color except indigo and violet.
// TODO: When a color is encountered log a message that tells the color, and an object of that color.
//       Example: Blue is the color of the sky.

// TODO: Have a final else that will catch indigo and violet.
// TODO: In the else, log: I do not know anything by that color.

// TODO: Using the ternary operator, conditionally log a statement that
//       says whether the random color matches your favorite color.
