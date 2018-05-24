import React from "react"

const Search = (props) => {
    return (
        <div>
            <label>Rajaa näytettäviä nimen perusteella</label>
            <input value={props.filter} onChange={props.handler} />
        </div>
    )
}

export default Search