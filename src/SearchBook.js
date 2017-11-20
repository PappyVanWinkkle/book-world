/* Search Book Component where books will be rendered  */
/* on the main page of the app */
import React, { Component } from "react";
import preload from "./data.json";
import "./SearchBook.css";

const SearchBook = () => (
  <div className="search-book">
    <div>
      {preload.books.map(book => (
        <div className="books">
          <img
            alt={`${book.title} `}
            src={ require(`./images/posters/${book.poster}`)}
          />
          <div>
            <h3>{book.title}</h3>
            <h4>{book.author}</h4>
            <p>{book.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default SearchBook;
