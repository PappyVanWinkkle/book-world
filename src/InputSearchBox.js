/* Input Search box for the component */
/* User types the name of the book in this component  */
import React from "react";
import './InputSearchBox.css';
import { Link } from "react-router-dom";

const InputSearchBox = (props: {
  showSearch?: boolean,
  handleSearch?: Function,
  searchTerm: string
}) => {
  let space;
  if (props.showSearch) {
    space = (
      <input
        onChange={props.handleSearch}
        value={props.searchTerm}
        text="text"
        className="search-box"
        placeholder="Search Books"
      />
    );
  }
  return (
      <div>
          {space}
      </div>    
  )
} 

InputSearchBox.defaultProps = {
  showSearch: false,
  handleSearch: function noop() {},
  searchTerm: ""
};

export default InputSearchBox;
