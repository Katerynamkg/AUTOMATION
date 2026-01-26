let person = {
	firstName: 'UserName',
	lastName: 'UserLastName',
	age: '25',
};

person.email = 'user.email@gmail.com';
delete person.age;

console.log(person);
