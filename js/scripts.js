var add = function(number1, number2) {
	return number1 + number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));

alert("The sum of your two numbers is" + " " + add(number1, number2) + ".");