/*Search book component lists all the books on the main page */
/*Loops through the json data to populate the page with books from API */
import React, { Component } from "react";
import BooksDetails from "./BooksDetails";
import { Link } from "react-router-dom";
import InputSearchBox from "./InputSearchBox";
import preload from "./data.json";
import "./BooksDetails.css";

class SearchBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };
    this.handleSearch = this.handleSearch.bind(this);
  }
  /* handle the user event when book is searched for */
  handleSearch(event) {
    this.setState({ searchTerm: event.target.value });
  }
  /* render the component to the DOM */
  render() {
    return (
      <div className="search-book">
        <Link to="/">
          <div className="home-button">
            <button>Back</button>
          </div>
        </Link>
        <InputSearchBox
          searchTerm={this.state.searchTerm}
          showSearch
          handleSearch={this.handleSearch}
        />
        <div>
          {preload.books
            .filter(
              book =>
                `${book.title} ${book.author} ${book.description}`
                  .toUpperCase()
                  .indexOf(this.state.searchTerm.toUpperCase()) >= 0
            )
            .map((book, index) => (
              <BooksDetails {...book} key={book.bkId} id={index} />
            ))}
        </div>
      </div>
    );
  }
}

export default SearchBooks;
