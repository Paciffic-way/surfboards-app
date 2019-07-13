import React, { Component } from "react";

import Item from "./item";
import Colors from "./colors";
import Checkout from "./checkout";

class lowerpanel extends Component {
 

  render() {

console.log("whaaat", this.props.selecteditem);
const dummy = Array.from(this.props.availableColors);
const color = dummy.map((item, key) => {
   return (
    <Colors 
          availableColors={item}
          key={item}
          
          />
      
         
   );
 });




    return (
      <>
        <div className="selecteditem">
          <Item   selecteditem={this.props.selecteditem}   />
        </div>

        <div className="colors">
          {color}
        </div>

        <div className="checkout">
          <Checkout />
        </div>
       
      </>
    );
  }
}

export default lowerpanel;
