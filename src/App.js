import React, { Component } from 'react';
import './App.css';
import AllHands from "./AllHands";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theHand: ["rock", "paper", "scissors"],
      Kylie: "",
      BadGrammord: "",
      theWinner: ""
    }
  }

  BadGrammordHand = () => {
    this.setState({ BadGrammord: this.state.theHand[Math.floor(Math.random() * 3)] },() => {
      this.theWinner();
    })
  }

 

  render() {
    return (
      <div className="App">

        <div className="theHands">
        {this.state.theHand.map((element, index) => {
          return <AllHands  function={this.click} key={index} img={element}/>
        })}
        </div>


      
      </div>
    );
  }
}

export default App;
 