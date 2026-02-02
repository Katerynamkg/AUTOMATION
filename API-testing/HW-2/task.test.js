const BookController = require('./BookController');
const { books } = require('./Books');
const MainController = require('./MainController');
const { token } = require('./token');
const UserController = require('./UserController');
const { users } = require('./userData');

beforeAll(async () => {
	const responseAuth = await UserController.login(users.userFirst.username, users.userFirst.password);
	await UserController.getToken(users.userFirst.username, users.userFirst.password);
	console.log('!!!!!!!!!!!!!!!!!!!!!!!!Token', token);
	console.log('AUTH RESPONSE:', responseAuth.data);
	// console.log('STATUS:', responseAuth.status);
	// console.log('token:', tokenResponse);
	expect(responseAuth.status).toBe(200);
});

afterAll(async () => {
	const response = await BookController.removeAllBooks(users.userFirst.userId);
	console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', response.data);
	expect([200, 204, 401]).toContain(response.status);
});

describe('Book Store', () => {
	test('Existed books', async () => {
		const response = await BookController.getAllBooks();
		const booksList = response.data.books;
		expect(response.status).toBe(200);
		expect(booksList.length).toBeGreaterThan(0);
		expect(booksList[0].description.length).toBeGreaterThan(0);
	});

	test('Add book', async () => {
		const response = await BookController.addBook(users.userFirst.userId, books[0].isbn);
		expect(response.status).toBe(201);
	});
});
