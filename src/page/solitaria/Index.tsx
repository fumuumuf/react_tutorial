import * as React from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'
import Game from './Game'

type Props = RouteComponentProps

const Index = ({ history }: Props) => {
  return (
    <div style={{ width: '800px', margin: '0 auto' }}>
      <h1>ペグソリティア</h1>
      <div>
        <Game />
      </div>
      <div>
        <h2>遊び方</h2>
        <ul>
          <li>盤上に駒（ペグまたはボール）を配置する。</li>
          <li>
            駒が縦横に並んでいてかつその隣に駒がないとき、駒は他の駒を飛び越えることが出来る。
          </li>
          <li>飛び越えられた駒は盤から取り除く。</li>
          <li>駒が1つになったら成功。中央に1つ残すのが最善とされる。</li>
        </ul>
        <a
          href={
            'https://ja.wikipedia.org/wiki/%E3%83%9A%E3%82%B0%E3%83%BB%E3%82%BD%E3%83%AA%E3%83%86%E3%83%BC%E3%83%AB'
          }
        >
          https://ja.wikipedia.org/wiki/ペグ・ソリテール
        </a>
        より引用
      </div>
    </div>
  )
}

export default Index
