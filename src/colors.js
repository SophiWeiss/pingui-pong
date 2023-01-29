export const colorMapPreview = {
  'MOUNTAINS': ['#993955', '#8b85c1', '#fae3e3'],
  'SPRING': ['#F79D00', '#AFC947', '#64F38C'],
  'BRIGHT NIGHT': ['#efbdeb', '#0a81d1', '#4a56ab'],
  'LIBERTY': ['#200122', '#6f0000', '#dbc0c0'],
  'WINTER': ['#dbc2cf', '#3c7a89', '#16262e'],
  'UKRAINE': ['#004ff9', '#80a4a3', '#fff94c'],
  'AUTUMN': ['#710000', '#c36f09', '#f4e409'],
  'SUMMER': ['#79e5a5', '#e6b175', '#ff767b']
}

export const colorMap = {
  'MOUNTAINS': [
    '#8b85c1', '#37123c', '#993955',
    '#ca8e9c', '#e2b9c0', '#fae3e3'
  ],
  'SPRING': [
    '#7ac74f', '#a1cf6b', '#e87461',
    '#d5d887', '#e0c879', '#e49e6d'
  ],
  'BRIGHT NIGHT': [
    '#4a56ab', '#314cb6', '#0a81d1',
    '#efbdeb', '#d3a5d2', '#b68cb8'
  ],
  'LIBERTY': [
    '#200122', '#34011a', '#6f0000',
    '#934040', '#b78080', '#dbc0c0'
  ],
  'WINTER': [
    '#3c7a89', '#2e4756', '#16262e',
    '#dbc2cf', '#bdb2c1', '#6e8e9e'
  ],
  'UKRAINE': [
    '#004ff9', '#407ace', '#80a4a3',
    '#a0ba8e', '#c0cf78', '#fff94c'
  ],
  'AUTUMN': [
    '#f4e409', '#c36f09', '#710000'
  ],
  'SUMMER': [
    '#a0e1ba', '#f2a37e', '#e4696d',
    '#d0dfa4', '#ffdd8e', '#f9c086'
  ]
}

export const colorRowLengths = [3, 2]

export function getGradientStyle(colors) {
  const colorsCount = colors.length
  const colorsWithPercentage = colors.map((color, index) =>
    `${color} ${Math.round(100 * index / (colorsCount - 1))}%`
  )
  return {backgroundImage: `linear-gradient(45deg, ${colorsWithPercentage.join(', ')})`}
}
