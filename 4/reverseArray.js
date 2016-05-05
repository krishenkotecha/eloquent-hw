The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order.

function reverseArray(array) {
	var reversed = [];
	for (var i = 0; i < array.length; i++) {
		reversed.unshift(array[i]);
	};
return reversed;
};