/* Landing page Component */
import React, { Component } from "react";
import SliderImages from './SliderImages';
import './Landing.css';


class Landing extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <header>
          <h1>BookWorld</h1>
        </header>
        <div className="slides">
          <SliderImages />
        </div>
        <button className="primary">Browse</button>
      </div>
    );
  }
}

export default Landing;
