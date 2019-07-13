import React, { Component } from "react";

class item extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false,
      id: null
    };
  }
 
 
  render() {

    const dummy=this.props.selecteditem;


    return <div className="selecteditemcontainer">


      {dummy}
     

      <div className="buttons--size">buttons here</div>
      <div className="buttons--fin">
        another butons here
      </div>

    </div>;
  }
}

export default item;
