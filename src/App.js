import React, { Component } from "react";
import "./App.css";
import Items from "./items";
import Navbar from "./navbar";
import Lowerpanel from "./lowerpanel";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colors: ""
    };
    this.handleItemChange = this.handleItemChange.bind(this);
    this.handleAvailableColors = this.handleAvailableColors.bind(this);
  }

  handleAvailableColors = colors => {
    this.setState(colors);
    console.log("dostepne kolory to ", this.state.colors);
  };

  handleItemChange = item => {
    this.setState(item);
    console.log("stan glowny to ", this.state);
  };
  render() {
    const dummydata = [
      {
        id: "1",
        image: "something",
        title: "Buy Milk.",
        colors: ["blue", "anotherone"],
        selected: false,
        date: new Date()
      },
      {
        id: "2",
        image: "something",
        title: "Meeting with Ali.",
        colors: [],
        selected: false,
        date: new Date()
      },
      {
        id: "3",
        image: "something",
        title: "Tea break.",
        colors: ["blue", "anotherone"],
        selected: false,
        date: new Date()
      },
      {
        id: "4",
        image: "/public/favicon.ico",
        title: "Go for a run.",
        colors: ["blue", "anotherone"],

        selected: false,
        date: new Date()
      }
    ];
    return (
      <div className="App">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="items">
          <Items
            dummyData={dummydata}
            onStateChange={this.handleItemChange}
            availableColors={this.handleAvailableColors}
          />
        </div>

        <div className="lowerpanel">
          <Lowerpanel
            availableColors={this.state.colors}
            selecteditem={this.state.item}
          />
        </div>
      </div>
    );
  }
}

export default App;
