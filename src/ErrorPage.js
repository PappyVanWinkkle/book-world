/* 404 Component Error Page. Default page if user types in  */
/* incorrect resources or files that cannot be found on the app */
import React from "react";
import { Link } from "react-router-dom";
import "./ErrorPage.css";

class ErrorPage extends React.Component {
  render() {
    return (
      <div className="Errors container">
        <div className="row">
          <div className="col-lg-10">
            <Link to="/">
              <header>
                <h1>BookWorld</h1>
              </header>
            </Link>
            <h5>Oooops, Something bad Happened</h5>
            <p>
              The page you are looking for does not exist Error 404 click on
              Bookworld
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ErrorPage;
