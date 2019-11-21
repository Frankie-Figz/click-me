import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import FriendCard from "./components/FriendCard";
import friends from "./friend.json";

class App extends Component{
  state = {
    friends : friends,
    currentScore : 0,
    highScore : 0
  };

  resetClicked = arr => {
    for(var key in arr)
      this.state.friends[key].clicked = false;
  }

  removeFriend = id => {
    // const friends = this.state.friends.filter(friend => friend.id !== id);
    for(var key in friends){
      if(friends[key].id === id){
        if(friends[key].clicked){
          console.log("I've already been clicked ! " + this.state.friends[key].name);
          this.resetClicked(friends);
          this.state.currentScore = 0;
          console.log("The CURRENT high score : " + this.state.highScore);
          if(this.state.currentScore > this.state.highScore){
            console.log("The NEW high score : " + this.state.highScore);
            this.state.highScore = this.state.currentScore;
            }
          } else {
          this.state.currentScore++;
          this.state.friends[key].clicked = true;
          console.log("The CURRENT score is : " + this.state.currentScore);
          if(this.state.currentScore > this.state.highScore){
            console.log("The NEW high score : " + this.state.highScore);
            this.state.highScore = this.state.currentScore;
            }
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
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend = {this.removeFriend}
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