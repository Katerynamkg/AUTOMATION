const axios = require('axios').default;
const BASE_URL = 'https://bookstore.toolsqa.com';
describe('User login', () => {
	test('Login', async () => {
		const response = await axios.post(`${BASE_URL}/Account/v1/Login`, {
			userName: 'Kate',
			password: 'Qwerty@987',
		});
		const userData = response.data;
		expect(response.status).toBe(200);
		expect(userData.username).toBe('Kate');
		expect(userData.userId).toBe('502c256c-de7c-4471-b329-308485648485');
	});

	test('Existed books', async () => {
		const response = await axios.get(`${BASE_URL}/BookStore/v1/Books`);
		console.log(response.data.books);
		const booksList = response.data.books;
		expect(response.status).toBe(200);
		expect(booksList.length).toBeGreaterThan(0);
		expect(booksList[0].description.length).toBeGreaterThan(0);
	});
});

test('Is Array', async () => {
	const response = await axios.get(`${BASE_URL}/BookStore/v1/Books`);
	const booksList = response.data.books;
	expect(Array.isArray(booksList)).toBe(true);

	booksList.forEach((book) => {
		expect(book.description).toBeTruthy();
	});
});

test('Get book with ISBN ', async () => {
	const response = await axios.get(`${BASE_URL}/BookStore/v1/Book`, {
		params: {
			ISBN: '9781449325862',
		},
	});
	const book = response.data;

	expect(book.title).toBe('Git Pocket Guide');
	expect(book.pages).toBe(234);
	expect(book.author).toBe('Richard E. Silverman');
	expect(response.status).toBe(200);
});

test('Get book with unreal ISBN ', async () => {
	const response = await axios.get(`${BASE_URL}/BookStore/v1/Book`, {
		params: {
			ISBN: 'XXXXX',
		},
		validateStatus: () => true,
	});
	expect(response.status).toBe(400);
});
