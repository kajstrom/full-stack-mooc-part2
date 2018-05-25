import React from 'react';
import Numbers from "./components/Numbers"
import Form from "./components/Form"
import Search from "./components/Search"
import axios from "axios"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      filter: ''
    }
  }

  componentDidMount() {
    axios.get("http://localhost:3001/persons")
      .then(response => {
        this.setState({persons: response.data})
      })
  }

  addNumberHander = (e) => {
    e.preventDefault();
    const newNumber = {
      name: this.state.newName,
      number: this.state.newNumber
    }

    if (undefined !== this.state.persons.find(p => p.name === this.state.newName)) {
      alert(`Henkilö nimellä ${this.state.newName} on jo luettelossa`)
      return
    }

    this.setState({
      persons: this.state.persons.concat(newNumber),
      newName: "",
      newNumber: ""
    });
  }

  nameChangeHandler = (e) => {
    this.setState({
      newName: e.target.value
    });
  }

  numberChangeHandler = (e) => {
    this.setState({
      newNumber: e.target.value
    })
  }

  filterChangeHandler = (e) => {
    this.setState({
      filter: e.target.value
    })
  }

  filteredPersons() {
    if (this.state.filter === "") {
      return this.state.persons
    }

    return this.state.persons.filter(p => p.name.indexOf(this.state.filter) !== -1)
  }

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <Search
          filter={this.state.filter}
          handler={this.filterChangeHandler}
        />
        <Form 
          name={this.state.newName}
          number={this.state.newNumber}
          submitHandler={this.addNumberHander}
          nameChangeHandler={this.nameChangeHandler}
          numberChangeHandler={this.numberChangeHandler}
        />
        <Numbers persons={this.filteredPersons()} />
      </div>
    )
  }
}

export default App