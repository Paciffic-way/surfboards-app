import React, { Component } from "react";

class colors extends Component {
  constructor(props) {
    super(props);
    console.log("zgadnij",this.props.availableColors);

    this.state = {
      edit: false,
      id: null,
         };
  }


  render() {


    return <div className="color">{this.props.availableColors}
    </div>;

  
  }
}

export default colors;
