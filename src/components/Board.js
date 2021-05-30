import React, {useState} from 'react'
import Cell from './Cell'

export default function Board() {

  const [row1, setRow1] = useState([])
  const [row2, setRow2] = useState([])
  const [row3, setRow3] = useState([])
  const [row4, setRow4] = useState([])
  const [row5, setRow5] = useState([])
  const [row6, setRow6] = useState([])
  const [player, setPlayer] = useState("X")

  const handleClick = (row, func) => {
    let arr = row
    arr.push(player)
    func(arr)
    player === "X" ? setPlayer("O") : setPlayer("X")
    console.log(row)
  }

  return (
    <div>
      <button onClick={() => handleClick(row1, setRow1)}> Click </button>
      <button onClick={() => handleClick(row2, setRow2)}> Click </button>
      <button onClick={() => handleClick(row3, setRow3)}> Click </button>
      <button onClick={() => handleClick(row4, setRow4)}> Click </button>
      <button onClick={() => handleClick(row5, setRow5)}> Click </button>
      <button onClick={() => handleClick(row6, setRow6)}> Click </button>
      <h3>Player "{player}'s" Turn</h3>
    <div className="container">
      <Cell click={() => handleClick(row1, setRow1)} char={row1[5] ? row1[5] : ""}/>
      <Cell click={() => handleClick(row2, setRow2)} char={row2[5] ? row2[5] : ""}/>
      <Cell click={() => handleClick(row3, setRow3)} char={row3[5] ? row3[5] : ""}/>
      <Cell click={() => handleClick(row4, setRow4)} char={row4[5] ? row4[5] : ""}/>
      <Cell click={() => handleClick(row5, setRow5)} char={row5[5] ? row5[5] : ""}/>
      <Cell click={() => handleClick(row6, setRow6)} char={row6[5] ? row6[5] : ""}/>
      
      <Cell char={row1[4] ? row1[4] : ""}/>
      <Cell char={row2[4] ? row2[4] : ""}/>
      <Cell char={row3[4] ? row3[4] : ""}/>
      <Cell char={row4[4] ? row4[4] : ""}/>
      <Cell char={row5[4] ? row5[4] : ""}/>
      <Cell char={row6[4] ? row6[4] : ""}/>

      <Cell char={row1[3] ? row1[3] : ""}/>
      <Cell char={row2[3] ? row2[3] : ""}/>
      <Cell char={row3[3] ? row3[3] : ""}/>
      <Cell char={row4[3] ? row4[3] : ""}/>
      <Cell char={row5[3] ? row5[3] : ""}/>
      <Cell char={row6[3] ? row6[3] : ""}/>

      <Cell char={row1[2] ? row1[2] : ""}/>
      <Cell char={row2[2] ? row2[2] : ""}/>
      <Cell char={row3[2] ? row3[2] : ""}/>
      <Cell char={row4[2] ? row4[2] : ""}/>
      <Cell char={row5[2] ? row5[2] : ""}/>
      <Cell char={row6[2] ? row6[2] : ""}/>

      <Cell char={row1[1] ? row1[1] : ""}/>
      <Cell char={row2[1] ? row2[1] : ""}/>
      <Cell char={row3[1] ? row3[1] : ""}/>
      <Cell char={row4[1] ? row4[1] : ""}/>
      <Cell char={row5[1] ? row5[1] : ""}/>
      <Cell char={row6[1] ? row6[1] : ""}/>

      <Cell char={row1[0] ? row1[0] : ""}/>
      <Cell char={row2[0] ? row2[0] : ""}/>
      <Cell char={row3[0] ? row3[0] : ""}/>
      <Cell char={row4[0] ? row4[0] : ""}/>
      <Cell char={row5[0] ? row5[0] : ""}/>
      <Cell char={row6[0] ? row6[0] : ""}/>
    </div>
    </div>
  )
}
