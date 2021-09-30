/* 競プロのノリで書いた 反省してない */
const MI = 33
const H = 7
const W = 7

const DX = [0, 1, 0, -1]
const DY = [1, 0, -1, 0]

const POS = Array.from(new Array(H), () => new Array(W).fill(0))

;(() => {
  let no = 0
  for (let i = 0; i < 2; i++) {
    for (let j = 2; j < 2 + 3; j++) {
      POS[i][j] = no
      no++
    }
  }
  for (let i = 2; i < 2 + 3; i++) {
    for (let j = 0; j < 7; j++) {
      POS[i][j] = no++
    }
  }
  for (let i = 2 + 3; i < 7; i++) {
    for (let j = 2; j < 2 + 3; j++) {
      POS[i][j] = no
      no++
    }
  }
})()

function posToI(y: number, x: number) {
  return POS[y][x]
}

const can_move = (g: Array<Array<number>>, y: number, x: number, d: number) => {
  if (g[y][x] != 1) return false
  for (let i = 0; i < 2; i++) {
    const ni = y + DY[d] * (i + 1)
    const nj = x + DX[d] * (i + 1)
    if (ni < 0 || ni >= H || nj < 0 || nj >= W) return false
    if (g[ni][nj] == -1) return false
    if (g[ni][nj] == i) return false
  }
  return true
}

const getDirection = (y1: number, x1: number, y2: number, x2: number) => {
  let direction = -1
  const xd = Math.sign(x2 - x1)
  const yd = Math.sign(y2 - y1)
  for (let i = 0; i < 4; i++) {
    if (DY[i] == yd && DX[i] == xd) {
      direction = i
      break
    }
  }
  return direction
}

export const canMove = (
  g: Array<Array<number>>,
  y1: number,
  x1: number,
  y2: number,
  x2: number
) => {
  const d = getDirection(y1, x1, y2, x2)
  if (d < 0) return false
  if (!(x1 + DX[d] * 2 == x2 && y1 + DY[d] * 2 == y2)) {
    return false
  }
  return can_move(g, y1, x1, d)
}

export const move = (
  g: Array<Array<number>>,
  y1: number,
  x1: number,
  y2: number,
  x2: number
) => {
  const d = getDirection(y1, x1, y2, x2)
  moveToDirection(g, y1, x1, d)
}

function moveToDirection(
  g: Array<Array<number>>,
  y1: number,
  x1: number,
  d: number
) {
  for (let i = 0; i < 2; i++) {
    const ni = y1 + DY[d] * (i + 1)
    const nj = x1 + DX[d] * (i + 1)
    g[ni][nj] = i
  }
  g[y1][x1] = 0
  return g
}

const iToPos = (i: number) => {
  // 上
  if (i < 6) {
    const y = Math.floor(i / 3)
    const x = Math.floor(i % 3)
    return [y, x + 2]
  }
  // 中央
  if (i >= MI - 6) {
    const tmp = i - (MI - 6)
    const y = Math.floor(tmp / 3)
    const x = Math.floor(tmp % 3)
    return [y + 5, x + 2]
  }
  // 下
  {
    i -= 6
    const y = Math.floor(i / 7)
    const x = Math.floor(i % 7)
    return [y + 2, x]
  }
}

/**
 * 0: ゲーム中
 * 1: ゲーム終了(成功)
 * -1: ゲーム終了(失敗)
 */
export const judge = (g: Array<Array<number>>) => {
  let cnt = 0
  for (let posi = 0; posi < MI; posi++) {
    const [i, j] = iToPos(posi)
    if (g[i][j] == 1) {
      for (let di = 0; di < 4; di++) {
        if (can_move(g, i, j, di)) return 0
      }
      cnt++
    }
  }
  if (cnt <= 1) return 1
  return -1
}

function toState(g: Array<Array<number>>) {
  let res = 0
  for (let pos = 0; pos < MI; pos++) {
    const [i, j] = iToPos(pos)
    if (g[i][j] == 1) res |= 1 << pos
  }
  return res
}

function rotState(state: number) {
  let res = 0
  for (let pos = 0; pos < MI; pos++) {
    if ((res >> pos) & 1) {
      let [i, j] = iToPos(pos)
      // rotate 90
      const tmp = i
      i = H - 1 - j
      j = tmp
      res |= 1 << posToI(i, j)
    }
  }
  return res
}

function revMove(g: Array<Array<number>>, y: number, x: number, d: number) {
  for (let i = 0; i < 2; i++) {
    const ni = y + DY[d] * (i + 1)
    const nj = x + DX[d] * (i + 1)
    g[ni][nj] = (i + 1) % 2
  }
  g[y][x] = 1
}

function dfs(
  g: Array<Array<number>>,
  arrived: Set<number>
): Array<Array<Array<number>>> | null {
  const state = toState(g)
  if (arrived.has(state)) return null
  const judge_res = judge(g)
  if (judge_res == 1) {
    return []
  } else if (judge_res == -1) {
    return null
  }
  for (let posi = 0; posi < MI; posi++) {
    const [i, j] = iToPos(posi)
    for (let di = 0; di < 4; di++) {
      if (can_move(g, i, j, di)) {
        moveToDirection(g, i, j, di)
        const res = dfs(g, arrived)
        if (res !== null) {
          res.push(
            g.map((v) => {
              return [...v]
            })
          )
          revMove(g, i, j, di)
          return res
        }
        revMove(g, i, j, di)
      }
    }
  }
  {
    let st = state
    for (let i = 0; i < 4; i++) {
      arrived.add(st)
      st = rotState(st)
    }
  }
  return null
}

export function solve(
  g: Array<Array<number>>
): Array<Array<Array<number>>> | null {
  g = g.map((v) => {
    return [...v]
  })
  const arrived = new Set<number>()
  const res = dfs(g, arrived)
  if (res != null) {
    return res.reverse()
  } else {
    return res
  }
}
