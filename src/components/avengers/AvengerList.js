import React, { Component } from "../../../node_modules/react";
import Avenger from "./Avenger";
import Wrapper from "../Wrapper";
import Title from "../Title";
import SubTitle from "../SubTitle";
import avengers from "../../avengers.json";

class AvengerList extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    avengers,
    correctGuesses: 0,
    winStatus: false,
    record: 0
  };

  // state = {
  //   active: "false"
  // };

  userLost = () => {
    var recordWins;
    if (this.state.correctGuesses > this.state.record) {
      recordWins = this.state.correctGuesses;
    } else {
      recordWins = this.state.record;
    }
    this.setState({
      winStatus: false,
      correctGuesses: 0,
      record: recordWins
    });
  };

  shuffleAvengers = () => {
    console.log("no of avengers are", this.state.avengers.length);
    var avengersToShuffle = this.state.avengers;
    for (var i = avengersToShuffle.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = avengersToShuffle[i];
      avengersToShuffle[i] = avengersToShuffle[j];
      avengersToShuffle[j] = temp;
    }
    console.log(avengersToShuffle);
    var correct = this.state.correctGuesses + 1;
    this.setState({
      avenges: avengersToShuffle,
      correctGuesses: correct,
      winStatus: true
    });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    console.log(this.state.avengers);
    return (
      <Wrapper>
        <Title>Avengers List</Title>
        <SubTitle>No.of Correct guesses: {this.state.correctGuesses} </SubTitle>
        {this.state.winStatus ? (
          <SubTitle>Well done</SubTitle>
        ) : (
          <SubTitle>Press an image to play again</SubTitle>
        )}
        <SubTitle>Personal Record: {this.state.record} </SubTitle>

        {this.state.avengers.map(avenger => (
          <Avenger
            id={avenger.id}
            key={avenger.id}
            name={avenger.name}
            image={avenger.image}
            isActive={avenger.isActive}
            shuffleAvengers={this.shuffleAvengers}
            userLost={this.userLost}
          />
        ))}
      </Wrapper>
    );
  }
}

export default AvengerList;
