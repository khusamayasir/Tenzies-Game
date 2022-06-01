import React from "react"

export default function Die(props) {

  return (
      <div className="die-face" onClick={props.hold} style={styles}>
          <h2 className="die-numbers">{props.value}</h2>
      </div>
  )
}
