function countBs(string) {
	var B_count = 0
	for (var i = 0; i < string.length; i++) {
		if (string.charAt(i) == "B") {
			B_count++
		};
	}
	return B_count
}