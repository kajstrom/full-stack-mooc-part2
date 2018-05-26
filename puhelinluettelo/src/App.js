import React from 'react';
import Numbers from "./components/Numbers"
import Form from "./components/Form"
import Search from "./components/Search"
import persons from "./services/persons"

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
    persons.getAll()
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

    const existingNumber = this.state.persons.find(p => p.name === this.state.newName);
    if (undefined !== existingNumber) {
      if (window.confirm(`Henkilö nimellä ${this.state.newName} on jo luettelossa. Haluatko korvata numeron?`)) {
        existingNumber.number = this.state.newNumber
        persons.update(existingNumber.id, existingNumber)
            .then(response => {
              this.setState({
                  persons: this.state.persons.map(p => p.id !== existingNumber.id ? p : response.data)
              })
            })
      }

      return
    }

    persons.add(newNumber)
        .then(response => {
          this.setState({
              persons: this.state.persons.concat(response.data),
              newName: "",
              newNumber: ""
          })
        })
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

  removeHandler = (id) => {
    return () => {
      persons.remove(id)
          .then(response => {
            this.setState({
                persons: this.state.persons.filter(p => p.id !== id)
            })
          })
    }
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
        <Numbers
            persons={this.filteredPersons()}
            removeHandler={this.removeHandler}
        />
      </div>
    )
  }
}

export default App