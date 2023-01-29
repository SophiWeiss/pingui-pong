import Window from './Window';
import {getGradientStyle, colorMapPreview, colorRowLengths} from '../colors';
import './ChangeColorsWindow.css'

function ColorsControlButton({colors, children}) {
  return (
    <button className='color-control-button'
            style={getGradientStyle(colors)}>
      {children}
    </button>
  )
}

function ColorsControl() {

  const colorRows = []
  let colorMapEntries = Object.entries(colorMapPreview)

  let rowLength
  let rowLengthIdx = 0
  let i = 0
  while (i < colorMapEntries.length) {
    rowLength = colorRowLengths[rowLengthIdx % colorRowLengths.length]
    colorRows.push(colorMapEntries.slice(i, i + rowLength))
    i += rowLength
    rowLengthIdx++
  }

  return colorRows.map((colorsRow, colorsRowIdx) =>
    <div key={colorsRowIdx} className='buttons-row'>{
      colorsRow.map(([colorName, colors], colorsIdx) =>
        <ColorsControlButton key={colorsIdx} colors={colors}>
          {colorName}
        </ColorsControlButton>
      )
    }</div>
  )
}

export default function ChangeColorsWindow({onBackButtonClick}) {
  return (
    <Window showBackButton={true} onBackButtonClick={onBackButtonClick}>
      <h1>CHANGE COLORS</h1>
      <ColorsControl/>
    </Window>
  )
}
