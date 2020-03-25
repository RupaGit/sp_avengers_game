import React, { Component } from "react";
import AvengerList from "./components/avengers/AvengerList";

class App extends Component {
  // Setting this.state.friends to the friends json array
  render() {
    return (
      <div className="App">
        <AvengerList />
      </div>
    );
  }
}

export default App;
