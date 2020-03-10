import React from 'react'
import { useThemeUI } from 'theme-ui'

export default props => {
  const context = useThemeUI()
  const { colorMode } = context
  const {name, width, height} = props;

  const DefaultModeSVG = require(`../../content/assets/${name}-${colorMode}.svg`) 
  const DarkModeSVG = require(`../../content/assets/${name}-${colorMode}.svg`)
  return colorMode === 'default' ? <DefaultModeSVG width={width} height={height} /> : <DarkModeSVG width={width} height={height} />
}