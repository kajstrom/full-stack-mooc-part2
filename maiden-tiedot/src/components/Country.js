import React from "react"

const Country = ({handler, country}) => {
    const clickHandler = () => {
        handler(country.name)
    }

    return (
        <li onClick={clickHandler} key={country.alpha3Code}>{country.name}</li>
    )
}

export default Country