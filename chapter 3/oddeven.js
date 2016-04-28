function oddeven(number) {
if (number == 0)
	return "even";
else if (number == 1)
	return "odd";
else if (number < 0)
	return "negative";
else 
	return oddeven(number - 2);
}