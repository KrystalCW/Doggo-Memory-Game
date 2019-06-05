import React, { Component } from "react";
import DoggosCard from "./components/DogCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Subtitle from "./components/Subtitle";
import Score from "./components/Score";
import Message from "./components/Message";
import doggos from "./doggos.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    doggos,
    score: 0,
    doggosclicked: [],
    message: "",
    checkRight: false,
  };

  handleClick = id => {
    const doggopics = this.dogShuffle(doggos);
    this.setState({ doggos: doggopics })
    if (this.state.doggosclicked.includes(id)) {
      this.setState({
        message: "You already guessed that one! Please play again.",
        checkRight: false,
        doggosclicked: [],
        score: 0
       })
    } else {
      this.setState({
        message: "Good job!",
        checkRight: true,
        doggosclicked: this.state.doggosclicked.concat([id]),
        score: this.state.score + 1
      });
      console.log("this dog was clicked!" + id);
      return { clicked: true }
    }
  }

  dogShuffle = (doggoArray) => {
    for (let i = doggoArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [doggoArray[i], doggoArray[j]] = [doggoArray[j], doggoArray[i]];
    }
    return doggoArray;
  }

  // changeDoggo = (id, boolean) => {
  //   if (boolean) {
  //     $('"#'+ id +'"').css()
  //   }
  // }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <div className="container">
          <div className="jumbotron">
            <Title>Doggos!</Title>
            <Subtitle>Click on an image to score points, but don't click on the same image more than once or the game will reset!</Subtitle>
          </div>
          <div className="row">
            <div className="col-6">
              <Message
                message={this.state.message}
                checkRight={this.state.checkRight}
              />
            </div>
            <div className="col-6">
              <Score>Score: {this.state.score}</Score>
            </div>
          </div>
          <div className="row">
            {/* <div className="container"> */}
              {this.state.doggos.map(doggo => (
                <DoggosCard
                  iWasClicked={this.handleClick}
                  id={doggo.id}
                  key={doggo.id}
                  image={doggo.image}
                  // clicked={doggo.clicked}
                />
              ))}
            {/* </div> */}
            </div>
          </div>
      </Wrapper>
    );
  }
}

export default App;
