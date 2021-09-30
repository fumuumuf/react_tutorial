import * as React from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'

type Props = RouteComponentProps

const Index = ({ history }: Props) => {
  return (
    <div>
      <h1>React 習作</h1>
      <ul>
        <li>
          <Link to="/solitaria">ペグソリティア</Link>
        </li>
      </ul>
    </div>
  )
}

export default Index
