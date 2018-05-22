import React from "react"

const Otsikko = (props) => {
    return (<h1>{props.kurssi}</h1>)
}

const Osa = (props) => {
    return (<p key={props.osa.id}>{props.osa} {props.tehtavia}</p>)
}

const Sisalto = (props) => {
    return(
        <div>
            {props.osat.map(osa => (<Osa key={osa.id} osa={osa.nimi} tehtavia={osa.tehtavia} />))}
        </div>    
    )
}

const Yhteensa = (props) => {
    return (<p>yhteensä {props.osat.reduce((acc, osa) => {return acc + osa.tehtavia}, 0)} tehtävää</p>)
}

const Kurssi = ({kurssi}) => {
    return (
        <div>
      <Otsikko kurssi={kurssi.nimi} />
      <Sisalto osat={kurssi.osat}/>
      <Yhteensa osat={kurssi.osat} />
    </div>
    )
}

export default Kurssi