import React from 'react'
import Grid from '../Grid/Grid'

const GridsScale = ({ level }) => {
  const grids = Array.from(Array(level).keys())
  return <div>{grids.map((grid, i) => <Grid key={i} />)}</div>
}

export default GridsScale
