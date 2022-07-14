////Mini Book Project
import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import { books } from './books';
import Book from './Book';

function App() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} book={book}></Book>;
      })}
    </section>
  );
}

ReactDom.render(<App />, document.getElementById('root'));
