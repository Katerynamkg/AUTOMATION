import { Book } from './Book.js';
export class EBook extends Book {
	constructor(name, author, year, format) {
		super(name, author, year);
		this.format = format;
	}

	get format() {
		return this._format;
	}

	set format(value) {
		if (typeof value == 'string' && value.trim().length > 0) {
			this._format = value;
		} else {
			console.error('The field format is wrong');
		}
	}

	printInfo() {
		super.printInfo();
		console.log(`The book format is: ${this.format}`);
	}

	static fromBook(book, format) {
		return new EBook(book.name, book.author, book.year, format);
	}
}

// let ebook1 = new EBook("The Hobbit", "J.R.R. Tolkien", 1937, "FB2");
// let ebook2 = new EBook("The Lord of the Rings", "J.R.R. Tolkien", 1954, "EPUB");
// let ebook3 = new EBook("The Great Gatsby","F. Scott Fitzgerald", 1925,"PDF");
// let ebook4 = new EBook("Brave New World", "Aldous Huxley", 1932, "MOBI");

// ebook1.printInfo()
// ebook2.printInfo()
// ebook3.printInfo()
// ebook4.printInfo()

// console.log(ebook1.format);
// console.log(ebook2.format);
// console.log(ebook3.format);
// console.log(ebook4.format);
