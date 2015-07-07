$(document).ready(function() {
	var fizzBuzz = function(n) {
		for (i=1; i<=n; i++) {
			if (i % 3 == 0 && i % 5 == 0) {
				$("body").append("fizz buzz<br>");
				continue;
			}
			else if (i % 3 == 0) {
				$("body").append("fizz<br>");
				continue;
			}
			else if (i % 5 == 0) {
				$("body").append("buzz<br>");
				continue;
			}
			else {
				$("body").append("" + i + "<br>");
			}
		}
	}
	fizzBuzz(100);
});