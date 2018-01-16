/* Search Book Component where books will be rendered  */
/* on the main page of the app */
import React from "react";
import { string } from "prop-types";
import { Link } from "react-router-dom";
import "./BooksDetails.css";

const BooksDetails = props => (
  <Link to={`/details/${props.bkId}`}>
    <div className="books">
      
       
      <img
        className="img-thumbnail"
        alt={`${props.title}`}
        src={require(`./images/posters/${props.poster}`)}
      />
      

      <div className="text-center">
        <h5>{props.title}</h5>
        <h6>{props.author}</h6>
        <p>{props.description}</p>
      </div>
    </div>
    
    
   
  </Link>
);

BooksDetails.propTypes = {
  poster: string.isRequired,
  title: string.isRequired,
  author: string.isRequired,
  description: string.isRequired
};

export default BooksDetails;
