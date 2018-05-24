import React from "react";

const Form = (props) => {
    return (
        <form onSubmit={props.submitHandler}>
          <h2>Lisää uusi</h2>
          <div>
            nimi: <input value={props.name} onChange={props.nameChangeHandler} />
          </div>
          <div>
            numero: <input value={props.number} onChange={props.numberChangeHandler} />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
    )
}

export default Form