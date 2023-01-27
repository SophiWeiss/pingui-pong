import React from 'react'
import './Window.css'

function BackButton(props) {
  return (
    <button className='back-button' onClick={props.onClick} style={getGradientStyle(['#993955', '#8b85c1'])}>
      <img src="https://img.icons8.com/sf-black-filled/64/ffffff/left.png" alt='back-button'/>
    </button>
  )
}

function Window(props) {
  return (
    <div className='window'>
      {props.children}
      {props.showBackButton && <BackButton onClick={props.onClick}/>}
    </div>
  )
}

function getGradientStyle(colors) {
  const colorsCount = colors.length
  const colorsWithPercentage = colors.map((color, index) =>
    `${color} ${Math.round(100 * index / (colorsCount - 1))}%`
  )

  return {backgroundImage: `linear-gradient(45deg, ${colorsWithPercentage.join(', ')})`}
}

function StartWindowButton(props) {
  return (
    <button onClick={props.onClick} style={getGradientStyle(['#993955', '#8b85c1'])}>
      {props.children}
    </button>
  )
}

function ColorsControlButton(props) {
  return (
    <button className='color-control-button'
            style={getGradientStyle(props.colors)}>
      {props.children}
    </button>
  )
}

function ColorsControl({colorMap}) {
  return colorMap.map((colorsRow, colorsRowIdx) =>
    <div key={colorsRowIdx} className='buttons-row'>{
      Object.keys(colorsRow).map((colorName, colorsIdx) =>
        <ColorsControlButton key={colorsIdx}
                             colors={colorsRow[colorName]}>
          {colorName}
        </ColorsControlButton>
      )
    }</div>
  )
}

export function StartWindow(props) {
  return (
    <Window showBackButton={false}>
      <h1>PINGUI PONG</h1>
      <p>
        This is my<strong> Pingui Pong</strong>, in this menu u can change colors as <strong>your ass</strong> wants to!
      </p>
      <StartWindowButton>PLAY</StartWindowButton>
      <StartWindowButton onClick={props.onClick}>CHANGE COLORS</StartWindowButton>
    </Window>
  )
}

export function ChangeColorsWindow(props) {
  return (
    <Window showBackButton={true} onClick={props.onClick}>
      <h1>CHANGE COLORS</h1>
      <ColorsControl colorMap={[
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
          'SUMMER': ['#50514f', '#f25f5c', '#ffe066', '#70c1b3']
        }
      ]}/>
    </Window>
  )
}
