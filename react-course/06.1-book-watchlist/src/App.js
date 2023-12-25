import { useState } from "react";

const finished = ["Just For Fun", "Masters of DOOM"];
const pending = ["Cosmos", "A Brief History of Time"];

function App() {
  return (
    <body>
      <main>
        <BookWatchlist />
      </main>
    </body>
  );
}

function BookWatchlist() {
  const [finishedBooks, setFinishedBooks] = useState(finished);
  const [pendingBooks, setPendingBooks] = useState(pending);

  function handleAddBook(title) {
    setPendingBooks(() => [...pendingBooks, title]);
    console.log(pendingBooks);
  }

  function handleClickBook(book) {
    console.log(book);
    // Remove book from pendingBooks and place it on finishedBooks
    setPendingBooks(() => pendingBooks.filter((b) => b !== book));
    setFinishedBooks(() => [...finishedBooks, book]);
  }

  return (
    <div className="header">
      <h1>Book Watchlist</h1>
      <Input onAddBook={handleAddBook}>Insert a book to add to the list</Input>
      <div className="lists-container">
        <PendingList books={pendingBooks} onClickBook={handleClickBook} />
        <FinishedList books={finishedBooks} />
      </div>
    </div>
  );
}

function Input({ onAddBook, children }) {
  const [title, setTitle] = useState("");

  function handleAddBook(e) {
    e.preventDefault();
    if (title === "") return;

    setTitle("");
    onAddBook(title);
  }

  return (
    <div className="book-input">
      <form>
        <label>{children}</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={handleAddBook}>Add</button>
      </form>
    </div>
  );
}

function PendingList({ books, onClickBook }) {
  return (
    <div className="pending-list">
      <h2>Pending</h2>
      <ul>
        {books.map((book) => (
          <li>
            <Book styles="pending-book" onClickBook={onClickBook}>
              {book}
            </Book>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FinishedList({ books }) {
  return (
    <div className="finished-list">
      <h2>Finished</h2>
      <ul>
        {books.map((book) => (
          <li>
            <Book styles="finished-book" onClickBook={() => void 0}>
              {book}
            </Book>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Book({ styles, onClickBook, children }) {
  return (
    <button className={`${styles}`} onClick={() => onClickBook(children)}>
      {children}
    </button>
  );
}

export default App;
