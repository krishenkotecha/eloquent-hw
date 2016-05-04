Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.



var range = function(start, end) {
	var result = [];
	if (end>start) {
	for (var i = start; i <= end; i++) {
		result.push(i);
	};
}
	else { for (var i = end; i <= start; i++) {
		result.push(i);
		};
	}
	return result;
}

why does this not work if i don't account for > or <?
