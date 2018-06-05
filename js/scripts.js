$(document).ready(function() {

	$("form#calc").submit(function(event) {
		event.preventDefault();

		var number1Input = $("#number1").val();
		var number2Input = $("#number2").val();

		$("span.number1").append(number1Input+"cc");
		$("span.number2").append(number2Input);

		$(".result").show();


	});
});
