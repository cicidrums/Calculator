var add = function(number1, number2) {
  return number1 + number2;
};
var subtract = function(number1, number2) {
  return number1 - number2;
};
var divide = function(number1, number2) {
  return number1 / number2;
};
var multiply = function(number1, number2) {
  return number1 * number2;
};

$(document).ready(function() {

	$("form#calc").submit(function(event) {
		event.preventDefault();

		var number1 = parseInt($("#number1").val());
		var number2 = parseInt($("#number2").val());
    var operator = $("input:radio[name=operator]:checked").val();

    if (operator === "add") {
      var result = add(number1, number2);
    } else if (operator === "subtract") {
      var result = subtract(number1, number2);
    } else if (operator === "divide") {
      var result = divide(number1, number2);
    } else if (operator === "multiply") {
      var result = multiply(number1, number2);
    }

		$("span.result").text(result);
    $(".result").show();

	});

  $("form#tri").submit(function(event) {
    event.preventDefault();

    var num1 = parseInt($("#num1").val());
		var num2 = parseInt($("#num2").val());
    var num3 = parseInt($("#num3").val());
    var sum1 = num1 + num2;
    var sum2 = num2 + num3;
    var sum3 = num3 + num1;

    if (num1 === num2 && num2 === num3 && num1 === num3) {
      var tri = "Equilateral.";
    } else if (num1 === num2 || num2 === num3 || num1 === num3) {
      var tri = "Isosceles.";
    } else if (sum1 <= num3 || sum2 <= num1 || sum3 <= num2) {
      var tri = "This is NOT a triangle yo.";
    } else if (num1 !=num2 && num1 !=num3 && num2 !=num3) {
      var tri = "Scalene.";
    }

    $("span.result2").text(tri);
    $(".result2").show();



  });
});
