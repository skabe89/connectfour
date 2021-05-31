import React from 'react'

export default function Cell(props) {

  if(props.char){
    if(props.char === "X"){
      return (
        <div className="cell" style={{backgroundColor: "#FF0000"}} onClick={props.click}>
          {/* <h3>{props.char}</h3> */}
        </div>
      )
    }
    else if(props.char === "O"){
      return (
        <div className="cell" style={{backgroundColor: "#696969"}} onClick={props.click}>
          {/* <h3>{props.char}</h3> */}
        </div>
      )
    }
  }
  else{
    return (
      <div className="cell" onClick={props.click}>
        {/* <h3>{props.char}</h3> */}
      </div>
    )
  }
}
