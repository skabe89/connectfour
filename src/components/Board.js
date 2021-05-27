import React, {useState} from 'react'
import Cell from './Cell'

export default function Board() {

  const [row1, setRow1] = useState([])
  const [player, setPlayer] = useState("X")

  const handleClick = (func) => {
    let arr = row1
    arr.push(player)
    func(arr)
    player === "X" ? setPlayer("O") : setPlayer("X")
    console.log(row1)
  }

  return (
    <div>
      <button onClick={() => handleClick(setRow1)}> Click </button>
      <h3>Player "{player}'s" Turn</h3>
    <div className="container">
      <Cell char={row1[5] ? row1[5] : ""}/>
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      
      <Cell char={row1[4] ? row1[4] : ""}/>
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />

      <Cell char={row1[3] ? row1[3] : ""}/>
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />

      <Cell char={row1[2] ? row1[2] : ""}/>
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />

      <Cell char={row1[1] ? row1[1] : ""}/>
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />

      <Cell char={row1[0] ? row1[0] : ""}/>
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
    </div>
    </div>
  )
}
