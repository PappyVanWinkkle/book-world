/* Main Landing Page Component of the Application with routes */
/* to Other Components */
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./LandingPage";
import SearchBooks from "./SearchBooks";
import preload from "./data.json";
import ErrorPage from "./ErrorPage";
import DetailedBooks from "./DetailedBooks";

class Landing extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="landing">
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route
              path="/search"
              component={props => (
                <SearchBooks book={preload.books} {...props} />
              )}
            />
            <Route
              path="/details/:id"
              component={props => {
                const selectedBook = preload.books.find(
                  book => props.match.params.id === book.bkId
                );
                return <DetailedBooks book={selectedBook} {...props} />;
              }}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Landing;
