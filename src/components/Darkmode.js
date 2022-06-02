import React from "react"
import "./Darkmode.css"

const Darkmode = ({ handleToggleDarkMode }) => {
	return (
		<div className="dark">
			<button className="btn" onClick={() => handleToggleDarkMode((previousDarkMode) => !previousDarkMode)}>
				Toggle Mode
			</button>
		</div>
	)
}

export default Darkmode;
