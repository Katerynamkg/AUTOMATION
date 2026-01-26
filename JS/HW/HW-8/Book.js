export class Book {
  constructor(name, author, year) {
    this.name = name;
    this.author = author;
    this.year = year;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value == "string" && value.trim().length > 0) {
      this._name = value;
    } else {
      console.error("The book name is wrong");
    }
  }

  get author() {
    return this._author;
  }

  set author(value) {
    if (typeof value == "string" && value.trim().length > 0) {
      this._author = value;
    } else {
      console.error("The field author is wrong");
    }
  }

  get year() {
    return this._year;
  }

  set year(value) {
    if (typeof value == "number" && value > 1900) {
      this._year = value;
    } else {
      console.error("the year is wrong");
    }
  }

  printInfo() {
    console.log(
      `Book info: book name: ${this.name}, book author: ${this.author}, book year: ${this.year}`
    );
  }
  
  static getOldestBook(books) {
  return books.reduce((oldest, current) => {
    return current.year < oldest.year ? current : oldest;
  });
}
}

let book1 = new Book("The Hobbit", "J.R.R. Tolkien", 1937);
let book2 = new Book("The Lord of the Rings", "J.R.R. Tolkien", 1954);
let book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
let book4 = new Book("Brave New World", "Aldous Huxley", 1930);



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
