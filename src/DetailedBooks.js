/*Detailed Component of an individual book on the app */
/* User can view an individual book on this page in more detail */
import React from "react";
import { Link } from "react-router-dom";
import "./DetailedBooks.css";

const DetailedBooks = (props: { book: Book }) => {
  const { title, author, description, poster } = props.book;
  return (
    <div className="detailed-book container-flex">
      <div className="row">
       <div className="col-lg-11">
      <header>
        <Link to="/search">
          <h1>BookWorld</h1>
        </Link>
      </header>
      
      <section className="detailedbook">
        <h2>{title}</h2>
        <h3>{author}</h3>
        <img
          src={require(`./images/posters/${poster}`)}
          alt={`poster for ${title}`}
        />
        <p>{description}</p>
      </section>
    </div>
    </div>
    </div>
  );
};

export default DetailedBooks;
