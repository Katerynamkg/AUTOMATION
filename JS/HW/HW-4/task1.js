function getCalculateArea(width, height) {
	return width * height;
}

console.log(getCalculateArea(5, 10));

let calculateArea = function (width, height) {
	return width * height;
};

console.log(calculateArea(5, 10));

let calculateAreaRectangle = (width, height) => width * height;
console.log(calculateAreaRectangle(5, 10));
