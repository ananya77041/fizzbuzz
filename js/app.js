$(document).ready(function() {
	var fizzBuzz = function(n) {
		for (i=1; i<=n; i++) {
			if (i % 3 == 0 && i % 5 == 0) {
				$("body").append("fizz buzz<br>");
			}
			else if (i % 3 == 0) {
				$("body").append("fizz<br>");
			}
			else if (i % 5 == 0) {
				$("body").append("buzz<br>");
			}
			else {
				$("body").append(i + "<br>");
			}
		}
	}

	var input = prompt('Please supply a number');
	while (input == "" || isNaN(parseInt(input))) {
		var input = prompt("You didn't enter a valid number. Try again.");
	}

	fizzBuzz(+parseInt(input));
})