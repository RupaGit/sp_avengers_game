import React, { Component } from "../../../node_modules/react";
import "./style.css";

class Avenger extends Component {
  constructor(props) {
    super(props);
    this.avengerSelected = this.avengerSelected.bind(this);
    this.state = {
      isActive: false
    };
  }

  avengerSelected(event) {
    event.preventDefault();
    console.log("Avenger state is ", this.state.isActive);
    var avengerState;
    const { shuffleAvengers } = this.props;
    const { userLost } = this.props;
    if (this.state.isActive === true) {
      userLost();
    } else {
      avengerState = true;
      shuffleAvengers();
    }
    this.setState({
      isActive: avengerState
    });
  }
  render() {
    // console.log("Avenger state is ", this.state.isActive);
    return (
      <div className="card">
        <img
          alt={this.props.name}
          src={this.props.image}
          onClick={this.avengerSelected}
        />
      </div>
    );
  }
}

export default Avenger;
