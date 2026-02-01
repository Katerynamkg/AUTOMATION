const MainController = require('./MainController');
const UserController = require('./UserController');

class BookController extends MainController {
	async getAllBooks() {
		return await this.axiosInstance.get('BookStore/v1/Books');
	}

	async addBook(userId, isbn) {
		return await this.axiosInstance.post(
			'BookStore/v1/Books',
			{
				userId,
				collectionOfIsbns: [
					{
						isbn: isbn,
					},
				],
			},
			{
				headers: {
					Authorization: `Bearer ${UserController.saveToken()}`,
					'Content-Type': 'application/json',
				},
			},
		);
	}

	async removeAllBooks(userId) {
		console.log('REMOVE ALL BOOKS FOR USER:', userId);
		console.log('TOKEN USED:', UserController.saveToken());
		return await this.axiosInstance.delete(
			'BookStore/v1/Books',

			{
				headers: {
					Authorization: `Bearer ${UserController.saveToken()}`,
					'Content-Type': 'application/json',
				},
				data: {
					userId: userId,
				},
			},
		);
	}
}

module.exports = new BookController();
