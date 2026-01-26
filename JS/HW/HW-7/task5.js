const testData = [
	{
		id: 1,
		name: 'Anna',
		age: 28,
		role: 'user',
		isActive: true,
	},
	{
		id: 2,
		name: 'Oleh',
		age: 35,
		role: 'admin',
		isActive: false,
	},
	{
		id: 3,
		name: 'Iryna',
		age: 22,
		role: 'user',
		isActive: true,
	},
	{
		id: 4,
		name: 'Dmytro',
		age: 41,
		role: 'manager',
		isActive: true,
	},
	{
		id: 5,
		name: 'Kateryna',
		age: 30,
		role: 'user',
		isActive: false,
	},
	{
		id: 6,
		name: 'Serhii',
		age: 26,
		role: 'support',
		isActive: true,
	},
	{
		id: 7,
		name: 'Olena',
		age: 34,
		role: 'admin',
		isActive: true,
	},
];

for (const { name, role, id } of testData) {
	console.log(`User name is ${name}, User role is ${role}, User ID is  ${id}`);
}
