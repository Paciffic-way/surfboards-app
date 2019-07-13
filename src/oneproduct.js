import React, { Component } from "react";

class Oneitem extends Component {
  updateCurrentItem = () => {
    this.props.changePlan(this.props.productData);
    this.props.availableColors(this.props.productColors);
  };

  render() {
    return (
      <div
        className={
          "product-" +
          (this.props.productData.id === this.props.currentProductId
            ? "is-active"
            : null)
        }
      >
        <div className="product--main">
          <header className="product--header">
        
            <div className="product--header--price">
              {this.props.productData}
            </div>
          </header>
          <main className="product--body" />
        </div>
        <footer className="product--footer">
          <button onClick={this.updateCurrentItem} className="product--choose">
            Choose
          </button>
        </footer>
      </div>
    );
  }
}

export default Oneitem;
