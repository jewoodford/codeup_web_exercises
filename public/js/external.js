"use strict";

console.log("Hello from external JavaScript!");

function areaOfRectangle(length, width) {
	var area = length * width;
	return area;
}

var rectangleArea = areaOfRectangle(10, 5);
console.log(rectangleArea);


var secondArea = areaOfRectangle(30, 3);
console.log(secondArea);


function isEven(input) {
    var remainder = input % 2;
    if (remainder === 0) {
        return true;
    } else {
        return false;
    }

    // return (input % 2 === 0) ? true : false;
}

console.log(isEven(34))

function sum(a, b) {
    return a + b;
}

console.log(sum(100, 500));


for( var i = 0; i < 100; i++) {
	if(isEven(i)) {
		console.log(i + " is even");
	} 
}