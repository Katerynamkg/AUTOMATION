function summArray(array) {
	if (array.length <= 2) {
		return 0;
	}
	let min = Math.min(...array);
	let max = Math.max(...array);

	let indexMin = array.indexOf(min);
	let indexMax = array.indexOf(max);
	let arrayTotalSum = array.reduce((acc, item) => {
		return acc + item;
	});
	let arraySum = arrayTotalSum - min - max;
	return arraySum;
}
console.log(summArray([8, 10, 2, -3, 5, 9]));
