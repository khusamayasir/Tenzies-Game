import React from "react"
import Die from "./Die"

export default function App() {

    const [dice, setDice] = React.useState(allNewDice())
    const [tenzies, setTenzies] = React.useState(false)

    React.useEffect(() => {
        const allHeld = dice.every(die => die.isHeld)
        const firstValue = dice[0].value
        const allSameValue = dice.every(die => die.value === firstValue)
        if (allHeld && allSameValue){
            setTenzies(true)
        }
    }, [dice])

    function generateNewDice() {

    }

    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push(generateNewDice())
        }
        return newDice
    }

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
