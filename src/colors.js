export const colorMap = [
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

export function getGradientStyle(colors) {
  const colorsCount = colors.length
  const colorsWithPercentage = colors.map((color, index) =>
    `${color} ${Math.round(100 * index / (colorsCount - 1))}%`
  )
  return {backgroundImage: `linear-gradient(45deg, ${colorsWithPercentage.join(', ')})`}
}
