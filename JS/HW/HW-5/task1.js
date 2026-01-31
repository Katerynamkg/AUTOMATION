function handleNum(number, handleEven, handleOdd) {
	if (number % 2 == 0) {
		handleEven();
	} else {
		handleOdd();
	}
}
let handleEven = () => console.log(`number is even`);

let handleOdd = () => console.log(`number is odd`);

handleNum(2, handleEven, handleOdd);
