import React, { Component } from 'react';
import './App.css';
import AllHands from "./AllHands";
import ResultTitle from "./ResultTitle";
import Historical from './Historical';
import AnimateTxt from './AnimateTxt';


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

  click = (event) => {
    this.setState({Kylie : event.currentTarget.name},() => {    
           // console.log("je choisis : ",this.state.Kylie);
  
      this.BadGrammordHand();
     
    })
  }

  theWinner = () => {
    const { Kylie, BadGrammord } = this.state;
    if (Kylie === BadGrammord) {
      return this.setState({ theWinner: "Equal !" })
    }
    else if ((BadGrammord === "paper" && Kylie === "rock") ||
      (BadGrammord === "rock" && Kylie === "scissors") ||
      (BadGrammord === "scissors" && Kylie === "paper")
    ) {
      return this.setState({ theWinner: "You lost !" },() => {
      });

    } else 
      return this.setState({ theWinner: "You win !"},() => {
      });
  }



  render() {
    return (
      <div className="App">
        <div className="titleGame">
           <AnimateTxt  textTitle/>
        </div>

        <div className="theHands">
        {this.state.theHand.map((element, index) => {
          return <AllHands  function={this.click} key={index} img={element}/>
        })}
        </div>

      <div className='theHand'>
        <div className='KylieHand'>
        <Historical  theHand={this.state.Kylie} nom={"What you choose with Kylie"} />
        </div>
        <div className="GrammordHand">
        <Historical  theHand={this.state.BadGrammord} nom={"What bad Grammord choose !"} />
        </div>
      </div>


        <div>
          <ResultTitle result={this.state.theWinner}/>
        </div>

      
      </div>
    );
  }
}

export default App;
 