import React from "react"
import Number from "./Number"

const Numbers = (props) => {
    return (
        <div>
            <h2>Numerot</h2>
            <ul>
                {props.persons.map(Number)}
            </ul>
        </div>
    )
}

export default Numbers