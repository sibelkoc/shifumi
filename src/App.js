import React, { Component } from 'react';
import './App.css';
import AllHands from "./AllHands";
import Historical from './Historical';
import AnimateTxt from './AnimateTxt';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theHand: ["rock", "paper", "scissors"],
      characters: ["Kylie", "Grammord"],
      Kylie: "",
      BadGrammord: "",
      theWinner:"",
      isActive: true
    
    };
  }
  hideAlert() {
    this.setState({
      isActive: false,
    });}
  


  BadGrammordHand = () => {
    this.setState({ BadGrammord: this.state.theHand[Math.floor(Math.random() * 3)] },() => {
      this.theWinner();
    })
  }

  click = (event) => {
    this.setState({Kylie : event.currentTarget.name},() => {    
      this.BadGrammordHand();
     
    })
  }



  theWinner = () => {
    const { Kylie, BadGrammord } = this.state;

    if (Kylie === BadGrammord) {
      return alert("Equal... Try again !"); 
    }

    else if ((BadGrammord === "paper" && Kylie === "rock") ||
      (BadGrammord === "rock" && Kylie === "scissors") ||
      (BadGrammord === "scissors" && Kylie === "paper")
    ) {
      return alert("You lost !") ;

    } else 
    return alert("You Win !") ;
  }


  render() {
    if (this.state.isActive) {
      return(
        <div
        className="alert alert-warning alert-dismissible"
        role="alert"
      >
        <div className="titleGame">
           <AnimateTxt  textTitle/>
        </div>
        <br></br>
          <div className='displayBox'>
              <div className='firstStep'>
                <div className='textSlideFirstStep'>
                    <strong>Kylie :</strong> "Hello, I'm Kylie!"<br>
                    </br>"I would like you, to help me, to fight the bad grammord mountain !"
                    <br></br>
                      "There is a mean parasite who has taken possession of him!"
                </div>
              <div className="Kylie"></div>
              </div>

              <div className='secondStep'>
                <div className='textSlideSecondStep'>
              <strong>Parasite :</strong> "Hehe, I' was very hungry!"<br>
              </br>"So I ate the soul of the mountain !"
              </div>
              <div className="Parasite"></div>
              </div>

              <div className='thirdStep'>
                <div className='textSlidethirdStep'>
              <strong>Grammord :</strong> "I'm the mean mountain that everyone calls Bad Grammord !"<br>
              </br>"If you win, I will die."
              <br></br>
                "If you lose, you'll stay stuck with me."
                </div>
              <div className="Grammord"></div>
              </div>
          </div>
          <button
          type="button"
          className="playButton"
          data-dismiss="alert"
          onClick={() => this.hideAlert()}
        >
          <span aria-hidden="true">Let's play</span>
        </button>
        
        </div>

      )
    }
    return (
      <div className="App">
        <div className="theHands">
        {this.state.theHand.map((element, index) => {
          return <AllHands  function={this.click} key={index} img={element}/>
        })}
        </div>

      <div className='theHand'>
        <div className="GrammordHand">
        <Historical  theHand={this.state.BadGrammord} nom={"What bad Grammord choose !"} />
        </div>
      </div>


      
      </div>

    );
  }
}




export default App;
 