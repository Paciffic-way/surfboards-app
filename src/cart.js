import React, { Component } from "react";

class cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false,
      id: null,
    };
  }

  render() {
    return (
      <div>
        
          {"Cart (12)"}
       
      </div>
    );
  }
}

export default cart;
