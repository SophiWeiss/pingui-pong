import React from 'react'
import {getGradientStyle} from './colors';
import './Window.css'

export default function Window({showBackButton, onBackButtonClick, children}) {
  return (
    <div className='window'>
      {children}
      {showBackButton &&
        <button className='back-button' onClick={onBackButtonClick} style={getGradientStyle(['#993955', '#8b85c1'])}>
          <img src="https://img.icons8.com/sf-black-filled/128/ffffff/left.png" alt='back-button'/>
        </button>
      }
    </div>
  )
}
