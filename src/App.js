import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Score from "./components/Score";
import pups from "./cards.json";
import "./App.css";

//statefull component
class App extends Component {
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
    let clickedPuppyIds = [...this.state.clickedPuppyIds];

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

      this.setState({clickedPuppyIds, score:this.state.score+1}, function(){console.log("state updated; " + this.state.score)});
      this.shuffleData(pups); 
    }
  }
      shuffleData = pups => {
        let i = pups.length - 1;
        while (i > 0) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = pups[i];
          pups[i] = pups[j];
          pups[j] = temp;
          i--;
        }
        this.setState(pups);
      };
      
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
        <Score score={this.state.score}
               goal={9}
               status={this.state.status}
               />
        <Wrapper>
          {this.state.pups.map(puppy => (
            <Card
              shuffleScoreCard={this.shuffleScoreCard}
              id={puppy.id}
              key={puppy.id}
              image={puppy.image}
            />
          ))}
        </Wrapper>
        <footer>
          <p className="App-footer">@2018</p>
        </footer>
    </div>
    );
  }
}

export default App;
