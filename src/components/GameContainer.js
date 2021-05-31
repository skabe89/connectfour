import React, {useState} from 'react'
import Board from './Board'

export default function GameContainer() {

  const [score, setScore] = useState([0, 0])

  return (
    <div>
      <h1>Connect Four</h1>
      <h3>Player 1 Score: {score[0]} || Player 2 Score: {score[1]}</h3>
      <Board />
    </div>
  )
}
