/* button component */
import React, { Component } from "react";
import { Button } from "reactstrap";

class primaryButton extends React.Component {
  render() {
    return (
      <div>
        <Button color="secondary">Back</Button>{' '}
      </div>
    );
  }
}

export default primaryButton;
