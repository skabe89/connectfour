import React from 'react'

export default function Cell(props) {
  return (
    <div className="cell">
      <h5>{props.char}</h5>
    </div>
  )
}
