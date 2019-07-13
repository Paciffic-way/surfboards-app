import React, { Component } from "react";
import Cart from "./cart";
import Applogo from './logo.svg';

class navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false,
      id: null
    };
  }

  render() {
    return (
      <>
      <div className="social--media">
        {"instagram logo"}
        </div>
        <img src={Applogo} className="company-logo" alt="logo"></img>

        <div className="cart">
          <Cart />
          </div>
      </>
    );
  }
}

export default navbar;
