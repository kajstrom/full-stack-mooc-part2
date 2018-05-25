import React, { Component } from 'react';
import Search from "./components/Search"
import axios from 'axios';
import Countries from "./components/Countries"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: [],
      term: ""
    }
  }

  componentDidMount() {
    axios.get("https://restcountries.eu/rest/v2/all")
      .then(response => {
        this.setState({countries: response.data})
      })
  }

  filteredCountries() {
    return this.state.countries.filter(c => c.name.indexOf(this.state.term) !== -1)
  }

  handleSearchTermChange = (e) => {
    this.setState({term: e.target.value})
  }

  selectCountryHandler = (term) => {
    this.setState({term})
  }

  render() {
    return (
      <div>
        <Search handler={this.handleSearchTermChange} term={this.state.term} />
        <Countries
          countries={this.filteredCountries()}
          selectCountryHandler={this.selectCountryHandler}  
        />
      </div>
    );
  }
}

export default App;
