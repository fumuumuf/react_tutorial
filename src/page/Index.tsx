import * as React from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'

type Props = RouteComponentProps

const Index = ({ history }: Props) => {
  return (
    <div>
      <h1>Web 習作</h1>
      <Link to="/solitaria">Page 2</Link>
    </div>
  )
}

export default Index
