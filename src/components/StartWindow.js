import Window from './Window'
import {getGradientStyle} from "../colors";
import './StartWindow.css'

function StartWindowButton({onClick, children}) {
  return (
    <button onClick={onClick} style={getGradientStyle(['#993955', '#8b85c1', '#993955'])}>
      {children}
    </button>
  )
}

export default function StartWindow({onChangeColorsButtonClick}) {
  return (
    <Window showBackButton={false}>
      <h1>PINGUI PONG</h1>
      <p>
        This is my <strong>Pingui Pong</strong>, in this menu u can change colors as <strong>your ass</strong> wants to!
      </p>
      <StartWindowButton>PLAY</StartWindowButton>
      <StartWindowButton onClick={onChangeColorsButtonClick}>CHANGE COLORS</StartWindowButton>
    </Window>
  )
}
