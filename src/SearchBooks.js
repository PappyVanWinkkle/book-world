/*Search book component lists all the books on the main page */
/*Loops through the json data to populate the page with books from API */
import React, { Component } from "react";
import BooksDetails from "./BooksDetails";
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
        <InputSearchBox
          searchTerm={this.state.searchTerm}
          showSearch
          handleSearch={this.handleSearch}
        />

        <div>
             
          {preload.books
            
            .map((book, index) => (
              <BooksDetails {...book} key={book.bkId} id={index} />
            ))}
        </div>
      </div>
    );
  }
}

export default SearchBooks;
