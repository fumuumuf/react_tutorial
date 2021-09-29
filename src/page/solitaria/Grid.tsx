import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import Square from './Square'
type Props = {
  grid: Array<Array<number>>
  onClick: (r: number, w: number) => void
  selectedPos: Array<number> | null
}

const Grid: React.FC<Props> = (props: Props) => {
  const grid = []
  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 7; j++) {
      const selected = Boolean(
        props.selectedPos &&
          props.selectedPos[0] == i &&
          props.selectedPos[1] == j
      )

      const square_prop = {
        row: i,
        col: j,
        selected: selected,
        value: props.grid[i][j],
        onClick: () => {
          props.onClick(i, j)
        },
      }
      grid.push(<Square {...square_prop} key={i * 7 + j} />)
    }
  }

  const style = {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 80px)',
    gridTemplateRows: 'repeat(7, 80px)',
  }
  return <div style={style}>{grid}</div>
}

export default Grid
