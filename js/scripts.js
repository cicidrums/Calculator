$(document).ready(function() {
	$('#blanks form').submit(function(event) {
		var number1Input = $("input#number1").val();
		var number2Input = $("input#number2").val();


		$('#number1').append(number1Input);
		$('#number2').append(number2Input);

		$('.result').show();

		event.preventDefault();
	});
});
