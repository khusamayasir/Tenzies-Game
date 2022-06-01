import React from "react"
import Die from "./Die"

export default function App() {

  return (
    <main>
        <h1>Tenzies</h1>
        <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div claasName="die-container"></div>
        <button className="roll-dice">
            Roll
        </button>
    </main>
  )
}
