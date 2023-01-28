export function getGradientStyle(colors) {
  const colorsCount = colors.length
  const colorsWithPercentage = colors.map((color, index) =>
    `${color} ${Math.round(100 * index / (colorsCount - 1))}%`
  )
  return {backgroundImage: `linear-gradient(45deg, ${colorsWithPercentage.join(', ')})`}
}