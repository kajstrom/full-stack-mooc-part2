import React from "react"

const Number = (props) => {
    const {name, number, id} = props.number

    return (
        <li key={name}>
            {name}:
            {number}
            <button onClick={props.removeHandler(id)}>poista</button>
        </li>
    )
}

export default Number