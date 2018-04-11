import React, { Component } from "react";
import Wrapper from "../Wrapper/Wrapper";
import Score from "../Score/Score.js";
import pups from "../../cards.json";
import "./Card.css";

// statefull component
class Card extends Component {
  // Setting this.state.pups to the cards json array
  state = {
    pups,
    clickedPuppyIds: [],
    score: 0,
    goal: 9,
    status: ""
  };

  //shuffle the pup cards in the browser when clicked
  shuffleScoreCard = id => {
    let clickedPuppyIds = this.state.clickedPuppyIds;

    if(clickedPuppyIds.includes(id)){
      this.setState({ clickedPuppyIds: [], score: 0, status:  "Game Over! You lost. Click to play again!" });
      return;
    }else{
      clickedPuppyIds.push(id)

      if(clickedPuppyIds.length === 9){
        this.setState({score: 9, status: "You Won! Click to play again!", clickedPuppyIds: []});
        console.log('You Win');
        return;
      }

     //dont know what else needs to be done here:
     //set the state? 
      //this.setState({ pups, clickedPuppyIds, score: clickedPuppyIds.length, status: " " });
  
      //set score???
      //for (let i = pups.length ....)
      
    }
  }

  // Map over this.state.cards and render a Card component for each card object
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">The Clicky</h1>
          <p className="App-intro">
            Try not to click the same image twice!
          </p>
        </header>
        <Score total={this.state.score}
               goal={9}
               status={this.state.status}
               />
        <Wrapper>
          {/* {this.state.pups.map(puppy => (
            /<Card
              shuffleScoreCard={this.shuffleScoreCard}
              id={puppy.id}
              key={puppy.id}
              image={puppy.image}
            />
          ))} */}
        </Wrapper>
        <footer>
          <p>Designed and built by SA.</p>
        </footer>
    </div>
    );
  }
}

export default Card;
