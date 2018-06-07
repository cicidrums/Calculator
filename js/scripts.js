var add = function(number1, number2) {
  return number1 + number2;
};

$(document).ready(function() {

	$("form#calc").submit(function(event) {
		event.preventDefault();

		var number1Input = parseInt($("#number1").val());
		var number2Input = parseInt($("#number2").val());
    var result = number1Input+number2Input;

    console.log(number1Input);
    console.log(number2Input);

		$("span.sum").append(result);

    $(".result").show();

	});
});
