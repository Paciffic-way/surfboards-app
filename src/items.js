import React, { Component } from "react";
import Oneitem from "./oneproduct";

class items extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleColors = this.handleColors.bind(this);


    this.state = {
      currentProduct: {}
    };
  }
  handleClick = (item) => {
    this.props.onStateChange({ item });
    console.log("przekazane propsy to ", item);
  }

  handleColors = (colors) => {
    this.props.availableColors({ colors });
    console.log("przekazane kolory to ", colors);
  }


  render() {
    const dummy = this.props.dummyData;
    const products = dummy.map((item, key) => {
      return (
        <Oneitem
          productData={item.title}
          productColors={item.colors}
          key={item.id}
          changePlan={this.handleClick.bind(this)}
          availableColors={this.handleColors.bind(this)}
          currentProductId={this.state.currentProduct.id}
        >
        </Oneitem>
      );
    });

    return <div className="products">{products}</div>;

    // return (
    //         <div style={{fontSize:'15px', display:'flex'}}>
    //               {dummy.map(item, => (
    //         <div onClick={this.handleClick} key={item.id} name="itemname" style={{margin:'10px'}} className={"ItemBar"}>
    //           <img  src={item.image}/>
    //           {item.title}
    //         </div>
    //       ))}

    //   </div>
    // );
  }
}

export default items;
