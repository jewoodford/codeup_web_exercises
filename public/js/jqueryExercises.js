"use strict";
var konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];
var keysCorrect = [];

$(document).keyup(function(event){
	console.log(event.keyCode);
	keysCorrect.push(event.keyCode);

	if (keysCorrect[keysCorrect.length-1] != konamiCode[keysCorrect.length-1]) {
		keysCorrect = [];
	}

	if (keysCorrect.length == konamiCode.length) {
		$("body").css("background-image", "url(/img/up1.jpeg");
		alert("You have added 30 lives!");
	}
});