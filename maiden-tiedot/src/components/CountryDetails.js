import React from "react"

const CountryDetails = ({country}) => {
    console.log(country)
    return (
        <div>
            <h1>{country.name} - {country.nativeName}</h1>
            <p>capital: {country.capital}</p>
            <p>population: {country.population}</p>

            <img src={country.flag} alt="Flag" />
        </div>
    )
}

export default CountryDetails