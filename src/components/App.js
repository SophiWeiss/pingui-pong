import React from 'react'
import StartWindow from './StartWindow.js'
import {ChangeColorsWindow} from "./ChangeColorsWindow";
import './App.css'

class App extends React.Component{

  constructor(props) {
    super(props);

    this.gameStates = {
      START: 0,
      CHANGE_COLORS: 1
    }

    this.state = {
      gameState: this.gameStates.START
    }
  }

  setGameState = gameState => {
    this.setState({gameState: gameState})
  }

  render() {

    const gameState = this.state.gameState
    const gameStates = this.gameStates

    return (
      <>
        {gameState === gameStates.START &&
          <StartWindow onChangeColorsButtonClick={() => this.setGameState(gameStates.CHANGE_COLORS)}/>
        }
        {gameState === gameStates.CHANGE_COLORS &&
          <ChangeColorsWindow onBackButtonClick={() => this.setGameState(gameStates.START)}/>
        }
      </>
    );
  }

}

export default App
