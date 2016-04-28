var pattern = "# # # #"
var row = 0

for (var i = 0; i < 8; i++) {
	row++
	if (row % 2 == 1) 
		console.log(" " + pattern)
	else 
		console.log(pattern + " ")
}