const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

/*


// Destructuring
const book = getBook(3);

// Deestructure using the names of the attributes in the JSON
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

console.log(title, author, genres);

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

// Destructure array
const [primaryGenre, secondaryGenre, ...otherGenres] = genres;

console.log(primaryGenre, secondaryGenre, otherGenres);

// Spread operator -> Spread array into another array instead of saving it as a single object in one position
const newGenres = [...genres, "epic fantasy"];
newGenres;

const updatedBook = {
  ...book,
  // Adding a new property
  moviePublicationDate: "2001-12-19",
  // Override an existing property
  //pages: 1210,
};
updatedBook;

// Arrow functions

//function getYear(str) {
//  return str.split("-")[0];
//}

const getYear = (str) => str.split("-")[0];
console.log(getYear(publicationDate));

// Template literals
const summary = `${title}, a ${pages}-page long book, was written by ${author} and published in ${getYear(
  publicationDate
)}. The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie`;
summary;

// Terniary operators
const pagesRange = pages > 1000 ? "over a thousand" : "less than 1000";
pagesRange;

console.log(`The book has ${pagesRange} pages`);

// Short circuiting
console.log(true && "Some string");
console.log(false && "Some string");
console.log(hasMovieAdaptation && "This book has a movie");

// falsy values: 0, '', null, undefined (act as false)
// truthy values: not falsy, true
console.log("jonas" && "some string");
console.log(0 && "second string");

console.log(true || "or string");
console.log(false || "or string");

console.log(book.translations.spanish);

const spanishTranslation = book.translations.spanish || "NOT TRANSLATED";
spanishTranslation;

// because 0 is a falsy value, it can introduce problems when 0 is a valid value
// here a book can have 0 reviews as its stored data, but because it acts as a falsy value it states it has no data stored (which would be more fitting for a null or undefined value)
//console.log(book.reviews.librarything.reviewsCount);
//const countWrong = book.reviews.librarything.reviewsCount || "no data";
//countWrong;

// nullish coallition operator, acts like an but shortcircuits with 0 and empty string ("")
//const count = book.reviews.librarything.reviewsCount ?? "no data";
//count;

// Optional chaining

console.log(getTotalReviewCount(book));

function getTotalReviewCount(book) {
  // Some books may not have a goodreads or libraryanythin view count
  const goodread = book.reviews.goodreads.reviewsCount;
  // Use ? to not bother checking if it doesn't exist. Stops error from poping up but returns an undefined, which breaks operations into a NaN
  // Use nullish coallition operator to set default value in case it doesnt exist (undefined)
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;
  librarything;
  return goodread + librarything;
}

// Array map method
// loop over an array and return a new array of the same length with some operation applied to each of the elements of the original array
const books = getBooks();
books;

// Arrow function gets called for each element of the array
const x = [1, 2, 3, 4, 5].map((el) => el * 2);
console.log(x);

// The arrow function returns book.title as the value to be stored in the new array
const titles = books.map((book) => book.title);
titles;

// Arrow function confuses the curly braces of object declaration with a block of code. doing it like this requires to manually return the object with return keyword
// Wrap output in parentheses to avoid this
const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount(book),
}));

essentialData;

// Array filter method
// Filter elements of an array into a new one following a condition
// return a condition to filter each element instead of a value
// stores the element in the new array if true, ignores if false
// can apply multiple times to apply multiple filtes
const longBooks = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
longBooks;

// Combine filter and map to filter books that have adventure and return only their titles
const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);
adventureBooks;

// Array reduce method
// reduce the array to one value
// needs a function to perform and a starter value
// The function can take in the startr value to read and write it
const pagesAllBooks = books.reduce((sum, book) => sum + book.pages, 0);
pagesAllBooks;

// Array sort method
const y = [3, 7, 1, 9, 6];
// Takes in two parameters
// Ascending or descending depending on the order of the operatiors inside the arrow function
// also modifies original array, which me may not want sometimes
// use slice to create a copy and sort that
const sorted = y.slice().sort((a, b) => b - a);
sorted;
y;

const sortedByPages = books
  .slice()
  .sort((a, b) => a.pages - b.pages)
  .map((book) => ({ title: book.title, pages: book.pages }));
sortedByPages;

// Immutable arrays
// Handle arrays without changing the original values
// 1) Add book object to array
const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J.K. Rowling",
};

const booksAfterAdd = [...books, newBook];

// 2) Delete book object from array
const booksAfterDelete = booksAfterAdd.filter((books) => books.id !== 3);
booksAfterDelete;

// 3) Update book object
const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 1210 } : book
);
booksAfterUpdate;

*/

// Promises
// fetching data from web isn't instantaneous, but js keeps running even if the request if unfulfilled
// then() function does something when the response is obtained
// .json() is also a promise

/*
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => console.log(data));

console.log("honas");
*/

// Asynchronous, async/await
// await allows us to pause until an instruction complets
async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
}

const todos = getTodos();
// doing this creates the need for another promise, since js immediatly moves to print the current state instead of waiting for the async funtion to finish
console.log(todos);
// this is executed first because js runs the function, then keeps going even though it isnt over
console.log("jonas");
