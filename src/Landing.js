/* Main Landing Page Component of the Application with routes */
/* to Other Components */
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./LandingPage";
import SearchBook from "./SearchBook";
import ErrorPage from "./ErrorPage";
import DetailedBooks from "./DetailedBooks";

class Landing extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="landing">
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/errors" component={ErrorPage} />
            <Route path="/search" component={SearchBook} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Landing;
