function countChar(string, character) {
	var charCount = 0
	for (var i = 0; i < string.length; i++) {
		if (string.charAt(i) == character) {
			charCount++
		};
	}
	return charCount
}