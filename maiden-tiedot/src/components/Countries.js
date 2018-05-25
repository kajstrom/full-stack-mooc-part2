import React from "react"
import Country from "./Country"
import CountryDetails from "./CountryDetails"

const Countries = ({countries, selectCountryHandler}) => {
    if (countries.length > 10) {
        return (<div>too many matches, specify another filter</div>)
    }

    if (countries.length === 1) {
        return (<CountryDetails country={countries[0]} />)
    }

    return (
        <ul>
            {countries.map((c) => {
                return (<Country country={c} handler={selectCountryHandler} />)
            })}
        </ul>
    )
}

export default Countries