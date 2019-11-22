import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import FriendCard from "./components/FriendCard";
import NavBar from "./components/NavBar";
import friends from "./friend.json";

class App extends Component{
  state = {
    friends : friends,
    currentScore : 0,
    highScore : 0,
    messageUser : ""
  };

  // Function that resets the been-clicked
  resetClicked = arr => {
    this.state.currentScore = 0;
    for(var key in arr)
      this.state.friends[key].clicked = false;
  }

  checkClick = id => {
    for(var key in friends){
      if(friends[key].id === id){
        if(friends[key].clicked){
          this.state.messageUser = "You Guessed Incorrectly !";
          this.resetClicked(friends);
          console.log("The CURRENT high score : " + this.state.highScore);
          } else {
              this.state.messageUser = "You Guessed Correctly !";
              this.state.currentScore++;
              this.state.friends[key].clicked = true;
              console.log("The CURRENT score is : " + this.state.currentScore);
              if(this.state.currentScore > this.state.highScore){
                console.log("The NEW high score : " + this.state.highScore);
                this.state.highScore = this.state.currentScore;
              };
          }
      };
    };
    this.doShuffle(friends);
    this.setState({friends});
    console.log(this.state.friends);
  };

  doShuffle = array => {
    for(let i = array.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * i)
      const temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }  
  };

  render() {
    return (
      <Wrapper>
        <div class = "container-fluid">
          <NavBar currentScore = {this.state.currentScore} highScore = {this.state.highScore} messageUser = {this.state.messageUser}> </NavBar>
        </div>

          {this.state.friends.map(friend => (
            <FriendCard
              checkClick = {this.checkClick}
              id = {friend.id}
              key = {friend.id}
              name = {friend.name}
              image = {friend.image}
              occupation = {friend.occupation}
              location = {friend.location}
              clicked = {friend.clicked}
            />
          ))}

      </Wrapper>
    )
  };
};

export default App;