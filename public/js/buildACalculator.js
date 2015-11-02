(function() {
	"use strict";

		var textarea1 = document.getElementById("textarea1");
		var textarea2 = document.getElementById("textarea2");
		var textarea3 = document.getElementById("textarea3");

		var numButts = document.getElementsByClassName("calcNumButt");
		var opButts = document.getElementsByClassName("calcOpButt");

		var clearButt = document.getElementById("calcClearButt");
		var equalButt = document.getElementById("calcEqualsButt");
		var decimalButt = document.getElementById("decimalButt");

		var calculatorButts = document.getElementsByTagName("button");
		
		for (var i = 0; i < numButts.length; i += 1) {
			numButts[i].addEventListener("click", numberPlacement, false);

		}

		function numberPlacement(event) {
			if (document.getElementById("textarea2").value == "") {
				textarea1.value += this.getAttribute("data-value");
			} else { 
				textarea3.value += this.getAttribute("data-value");
			}
		}

		for (var i = 0; i < opButts.length; i += 1) {
			opButts[i].addEventListener("click", operatorPlacement, false);
		}

		function operatorPlacement(event) {
			textarea2.value = this.getAttribute("data-operators");
		}

		function clearCalc(event) {
			textarea1.value = ""
			textarea2.value = ""
			textarea3.value = ""
			document.getElementById("decimalButt").disabled = false
		}

		clearButt.addEventListener("click", clearCalc);


		function calcEquals(event) {
			if (document.getElementById("textarea2").value == "+") {
				document.getElementById("textarea1").value = parseFloat(document.getElementById("textarea1").value) + parseFloat(document.getElementById("textarea3").value)
			} else if (document.getElementById("textarea2").value == "-") {
				document.getElementById("textarea1") = parseFloat(document.getElementById("textarea1").value) - parseFloat(document.getElementById("textarea3").value)
			} else if (document.getElementById("textarea2").value == "*") {
				document.getElementById("textarea1") = parseFloat(document.getElementById("textarea1").value) * parseFloat(document.getElementById("textarea3").value)
			} else if (document.getElementById("textarea2").value == "/") {
				document.getElementById("textarea1") = parseFloat(document.getElementById("textarea1").value) / parseFloat(document.getElementById("textarea3").value)
			}
			document.getElementById("textarea2").value = ""
			document.getElementById("textarea3").value = ""
		}

		equalButt.addEventListener("click", calcEquals)

		function noRepeat(event) {
			if(textarea1.value.indexOf(".") != -1) {
				document.getElementById("decimalButt").disabled = true
			}
			if (textarea2.value == "+" || textarea2.value == "-" || textarea2.value == "*" || textarea2.value == "/") {
				document.getElementById("decimalButt").disabled = false
			}
			if(textarea3.value.indexOf(".") != -1) {
				document.getElementById("decimalButt").disabled = true
			}
		}
		
		for (var x = 0; x < calculatorButts.length; x += 1) {
			calculatorButts[x].addEventListener("click", noRepeat);
		}
})();