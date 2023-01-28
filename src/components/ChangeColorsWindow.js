import Window from './Window';
import {getGradientStyle, colorMap} from '../colors';
import './ChangeColorsWindow.css'

function ColorsControlButton({colors, children}) {
  return (
    <button className='color-control-button'
            style={getGradientStyle(colors)}>
      {children}
    </button>
  )
}

function ColorsControl({colorMap}) {
  return colorMap.map((colorsRow, colorsRowIdx) =>
    <div key={colorsRowIdx} className='buttons-row'>{
      Object.keys(colorsRow).map((colorName, colorsIdx) =>
        <ColorsControlButton key={colorsIdx} colors={colorsRow[colorName]}>
          {colorName}
        </ColorsControlButton>
      )
    }</div>
  )
}

export function ChangeColorsWindow({onBackButtonClick}) {
  return (
    <Window showBackButton={true} onBackButtonClick={onBackButtonClick}>
      <h1>CHANGE COLORS</h1>
      <ColorsControl colorMap={colorMap}/>
    </Window>
  )
}
