import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import NavBar from "./components/NavBar";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    highScore: 0,
    score: 0,
    clicked: []
  };

  isClicked = id => {
    console.log("You clicked id " + id)
    // Filter this.state.friends for friends with an id not equal to the id being removed
    // const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    // this.setState({ friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <NavBar score={this.state.score} highScore={this.state.highScore}>Clicky Game</NavBar>
        <Title>Clicky Game</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            clickedFriend={this.isClicked}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}

          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
