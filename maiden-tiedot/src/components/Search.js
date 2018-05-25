import React from "react"

const Search = (props) => {
    const {term, handler} = props

    return (
        <div>
            <label>find countries</label>
            <input value={term} onChange={handler} />
        </div>
    )
}

export default Search