let car1 = {
	brand: 'Renault',
	model: 'Megan',
	year: '2019',
};

let car2 = {
	brand: 'Volvo',
	model: 'S80',
	owner: 'car owner',
};

let car3 = { ...car1, ...car2 };

console.log(car3);
