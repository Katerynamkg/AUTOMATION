import { Book } from "./Book.js";
import { EBook } from "./EBook.js";


let book1 = new Book("The Hobbit", "J.R.R. Tolkien", 1937);
let book2 = new Book("The Lord of the Rings", "J.R.R. Tolkien", 1954);
let book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
let book4 = new Book("Brave New World", "Aldous Huxley", 1930);

let ebook1 = new EBook("The Hobbit", "J.R.R. Tolkien", 1937, "FB2");
let ebook2 = new EBook("The Lord of the Rings", "J.R.R. Tolkien", 1954, "EPUB");
let ebook3 = new EBook("The Great Gatsby","F. Scott Fitzgerald", 1920,"PDF");
let ebook4 = new EBook("Brave New World", "Aldous Huxley", 1932, "MOBI");


// book1.printInfo();
// book2.printInfo();
// book3.printInfo();
// book4.printInfo();

// console.log(book1.name);
// console.log(book1.author);
// console.log(book1.year);

// console.log(book2.name);
// console.log(book2.author);
// console.log(book2.year);

// console.log(book3.name);
// console.log(book3.author);
// console.log(book3.year);

// console.log(book4.name);
// console.log(book4.author);
// console.log(book4.year);


// ebook1.printInfo()
// ebook2.printInfo()
// ebook3.printInfo()
// ebook4.printInfo()

// console.log(ebook1.format);
// console.log(ebook2.format);
// console.log(ebook3.format);
// console.log(ebook4.format);


let books = [book1, book2, book3, book4, ebook1, ebook2, ebook3, ebook4];

let oldest = Book.getOldestBook(books);
oldest.printInfo();


let ebookFromBook = EBook.fromBook(book1, "FB2");
ebookFromBook.printInfo();