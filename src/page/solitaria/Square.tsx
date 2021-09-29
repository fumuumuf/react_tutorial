import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import styles from './Square.module.scss'

type Props = {
  value: number
  row: number
  col: number
  selected: boolean
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void
}

const Square: React.FC<Props> = (props: Props) => {
  const innerClasses = []
  if (props.value == 1) innerClasses.push(styles['ball'])
  if (props.selected) innerClasses.push(styles['selected'])

  const classes = [styles['square']]
  if (props.value < 0) classes.push(styles['block'])

  return (
    <div className={classes.join(' ')} onClick={props.onClick}>
      <div className={innerClasses.join(' ')}></div>
    </div>
  )
}

export default Square
