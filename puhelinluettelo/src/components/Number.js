import React from "react"

const Number = (props) => {
    return (
        <li key={props.name}>
            {props.name}:
            {props.number}
        </li>
    )
}

export default Number