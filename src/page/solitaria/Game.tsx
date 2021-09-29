import React, { useState, useEffect } from 'react'
import Grid from './Grid'
import * as GameLogic from './gameLogic'
import IconButton from '@mui/material/Button'
import Button from '@mui/material/Button'
import { ArrowBack, ArrowForward, GamepadSharp } from '@material-ui/icons'
import styles from './Game.module.scss'
import Stack from '@mui/material/Stack'
import { green } from '@mui/material/colors'
import { useTheme } from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography'

type GridType = Array<Array<number>>
type GameStatus = {
  status: 0 | 1 | -1
  text: string
  color: string
}

const copyGrid = (g: GridType) => {
  return g.map((v) => {
    return [...v]
  })
}

const getInitialGrid = () => {
  const grid = [
    '##111##',
    '##111##',
    '1111111',
    '1110111',
    '1111111',
    '##111##',
    '##111##',
  ]

  const res = []
  for (let i = 0; i < grid.length; i++) {
    const row = []
    for (let j = 0; j < grid.length; j++) {
      if (grid[i][j] == '#') row.push(-1)
      else row.push(Number(grid[i][j]))
    }
    res.push(row)
  }
  return res
}

const Game: React.FC = () => {
  const [selectedPos, selectPos] = useState<null | Array<number>>(null)
  const [history, setHistory] = useState<Array<GridType>>([getInitialGrid()])
  const [stepNo, setStepNo] = useState<number>(0)
  const [playHistory, setPlayHistory] = useState<boolean>(false)
  const currentGrid = () => history[stepNo]

  useEffect(() => {
    // レンダー後に何かの処理をしないといけない、ということを React に伝えます
    // デフォルトでは、副作用関数は初回のレンダー時および毎回の更新時に呼び出されます。

    const interval = setInterval(() => {
      if (playHistory) {
        if (stepNo + 1 < history.length) {
          setStepNo((no) => no + 1)
        } else {
          setPlayHistory(() => false)
        }
      }
    }, 300)
    return () => clearInterval(interval)
  })

  const onClickSquare = (r: number, w: number) => {
    const grid = currentGrid()
    if (GameLogic.judge(grid) != 0) return

    if (!selectedPos) {
      if (grid[r][w] == 1) {
        selectPos([r, w])
      }
    } else {
      if (
        GameLogic.canMove(currentGrid(), selectedPos[0], selectedPos[1], r, w)
      ) {
        const g = copyGrid(currentGrid())
        GameLogic.move(g, selectedPos[0], selectedPos[1], r, w)
        setHistory([...history.slice(0, stepNo + 1), g])
        setStepNo(stepNo + 1)
      }
      selectPos(null)
    }
  }
  const statuText = () => {
    const status = GameLogic.judge(currentGrid())
    let text
    let color = 'inherit'
    if (status == 0) {
      const rest = 32 - stepNo - 1
      text = `あと ${rest} コ`
    } else if (status == 1) {
      text = '成功'
      color = green['A400']
    } else {
      text = '失敗'
      color = useTheme().palette.error.main
    }
    return (
      <div style={{ color: color }}>
        <Typography variant="h5" color="inherit" align="center">
          {text}
        </Typography>
      </div>
    )
  }

  const nextHist = () => {
    if (stepNo + 1 >= history.length) return
    setStepNo(stepNo + 1)
  }
  const prevHist = () => {
    if (stepNo <= 0) return
    setStepNo(stepNo - 1)
  }
  const resetHist = () => {
    setStepNo(0)
    setHistory([getInitialGrid()])
  }
  const solve = () => {
    const res = GameLogic.solve(currentGrid())

    if (res) {
      setHistory([...history.slice(0, stepNo + 1), ...res])
      setPlayHistory(true)
    } else {
      alert('この状態からは解けません')
    }
  }
  return (
    <div className={styles['game']}>
      <div className={styles['game-grid']}>
        <Grid
          grid={currentGrid()}
          selectedPos={selectedPos}
          onClick={onClickSquare}
        ></Grid>
      </div>
      <div style={{ marginBottom: '10px' }}>{statuText()}</div>
      <Stack spacing={2} direction="row">
        <IconButton aria-label="back" color="primary" onClick={prevHist}>
          <ArrowBack />
        </IconButton>
        <IconButton aria-label="forward" color="primary" onClick={nextHist}>
          <ArrowForward />
        </IconButton>
        <Button variant="outlined" color="primary" onClick={resetHist}>
          リセット
        </Button>
        <Button variant="outlined" color="primary" onClick={solve}>
          続きを自動で解く
        </Button>
      </Stack>
    </div>
  )
}
export default Game
