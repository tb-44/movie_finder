import React from "react";
import "./App.css";
import Nav from "././components/Nav";
import SearchBox from "././components/SearchBox";
class App extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
    this.state = {
      movies: [],
      searchItems: "",
    };
    this.apiKey = process.env.REACT_APP_API;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      `https://api.themoviedb.org/3/movie?api_key=${this.apiKey}&query=${this.state.searchItems}`
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response.results);
        this.setState({ movies: [...response.results] });
      });
  };

  handleChange = (e) => {
    this.setState({ searchItems: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <SearchBox
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
