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

  componentDidMount() {
    // console.log(this.state.friends)
    this.randomizeCards();
  }

  isClicked = id => {
    // console.log("You clicked id " + id);
    this.randomizeCards();

    if (this.state.clicked.includes(id)) {
      // console.log("Already clicked " + id);
      this.setState({ clicked: [], score: 0 });
    } else {
      // console.log("First click of " + id);
      this.state.clicked.push(id);
      this.setState({ score: this.state.score + 1 });
      if (this.state.score > this.state.highScore) {
        this.setState({ highScore: this.state.score });
      }
    }

  };

  randomizeCards = () => {
    let randomizedList = [];
    // for (var i = 0; i < this.state.friends.length; i++) {
    while (randomizedList.length !== this.state.friends.length) {
      let rng = Math.floor(Math.random() * this.state.friends.length);
      if (!randomizedList.includes(this.state.friends[rng])) {
        randomizedList.push(this.state.friends[rng]);
      }

    }
    // console.log(randomizedList)
    this.setState({ friends: randomizedList });
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (

      <div className="app">
        <NavBar score={this.state.score} highScore={this.state.highScore}>Clicky Game</NavBar>

        <Wrapper>
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
      </div>

    );
  }
}

export default App;
