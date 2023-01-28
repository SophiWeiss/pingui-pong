import Window from './Window';
import {getGradientStyle} from './colors';
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

  const colorMap = [
    {
      'MOUNTAINS': ['#993955', '#8b85c1', '#fae3e3'],
      'SPRING': ['#7ac74f', '#d5d887', '#e87461'],
      'BRIGHT NIGHT': ['#efbdeb', '#4a56ab', '#0a81d1']
    },
    {
      'EARTH GIFTS': ['#232020', '#955e42', '#748e54'],
      'WINTER': ['#dbc2cf', '#3c7a89', '#16262e']
    },
    {
      'METALS': ['#242f40', '#cca43b', '#ffffff'],
      'AUTUMN': ['#f4e409', '#c36f09', '#710000'],
      'SUMMER': [ '#ffe066', '#f25f5c', '#50514f']
    }
  ]

  return (
    <Window showBackButton={true} onBackButtonClick={onBackButtonClick}>
      <h1>CHANGE COLORS</h1>
      <ColorsControl colorMap={colorMap}/>
    </Window>
  )
}
