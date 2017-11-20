/* Landing page Component */
import React, { Component } from "react";
import SliderImages from './SliderImages';
import { Link } from 'react-router-dom';
import './LandingPage.css';


class LandingPage extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <header>
          <h1>BookWorld</h1>
        </header>
        <div className="slides">
          <SliderImages />
        </div>
        <Link to="/search">
        <button className="primary">Browse</button>
        </Link>
      </div>
    );
  }
}

export default LandingPage;
