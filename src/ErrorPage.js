/* 404 Component Error Page. Default page if user types in  */
/* incorrect resources or files that cannot be found on the app */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ErrorPage.css";

class ErrorPage extends React.Component {
  render() {
    return (
      <div className="Errors">
        <Link to="/">
          <header>
            <h1>BookWorld</h1>
          </header>
        </Link>
        <h2>Oooops, Something bad Happened</h2>
        <h4>The page you are looking for does not exist Error 404</h4>
      </div>
    );
  }
}

export default ErrorPage;
