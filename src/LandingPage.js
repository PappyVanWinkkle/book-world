/* Landing page Component */
/* This is the home main page of the application  */
import React from "react";
import SliderImages from "./SliderImages";
import { Link } from "react-router-dom";
import "./LandingPage.css";

class LandingPage extends React.Component {
  render() {
    return (
      <div className="wrapper container">
        <div className="col-lg-11">
          <header>
            <h1>BookWorld</h1>
          </header>
          <div className="slides">
            <SliderImages />
          </div>
          <Link to="/search">
            <button className="primary btn btn-outline-dark ml-2 text-center">
              Browse
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default LandingPage;
