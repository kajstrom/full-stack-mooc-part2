import React from "react"
import Number from "./Number"

const Numbers = (props) => {
    return (
        <div>
            <h2>Numerot</h2>
            <ul>
                {props.persons.map(p => <Number number={p} removeHandler={props.removeHandler} />)}
            </ul>
        </div>
    )
}

export default Numbers