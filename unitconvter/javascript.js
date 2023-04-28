function convert() {
	var input = parseFloat(document.getElementById("input").value);
	var from = document.getElementById("from").value;
	var to = document.getElementById("to").value;
	var output = document.getElementById("output");

	if (isNaN(input)) {
		alert("Please enter a valid number.");
		return;
	}

	var conversionFactors = {
		inch: 1,
		foot: 12,
		yard: 36,
		mile: 63360,
		centimeter: 0.393701,
		meter: 39.3701,
		kilometer: 39370.1,
		millimeter: 0.0393701
	};

	var result = input * conversionFactors[from] / conversionFactors[to];

	output.value = result.toFixed(2) + " " + to;
}
