var add = function(number1, number2) {
  return number1 + number2;
};

$(document).ready(function() {

	$("form#calc").submit(function(event) {
		event.preventDefault();

		var result = add(number1, number2);
		var number1Input = parseInt($("#number1").val());
		var number2Input = parseInt($("#number2").val());

		$("span.number1").append(number1Input);
		$("span.number2").append(number2Input);

		$(".result").show();


	});
});
