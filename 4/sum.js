Next, write a sum function that takes an array of numbers and returns the sum of these numbers.

var sum = function(array) {
	var result = 0;
	for (var i = 0; i < array.length; i++) {
		result += array[i];
	};
	return result;
}

why does starting with i = array[0] skip the first number when summing?