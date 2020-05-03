import React, { useState, useEffect } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import SearchBox from "./components/SearchBox/SearchBox";

function App() {
  const [movie, setMovie] = useState({ movies: [] });
  const [search, setSearch] = useState({ searchItems: "" });
  const apiKey = process.env.REACT_APP_API;

  useEffect(() => {
    //console.log("in use effect");
  }, []);

  const handleMovies = (e) => {
    e.preventDefault();
    fetch(`https://api.themoviedb.org/3/movie/550?api_key=${apiKey}`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setMovie({ ...movie, movies: response.data });
      });
  };

  const handleSearch = (e) => {
    setSearch({ ...search, searchItems: e.target.value });
  };

  return (
    <div className="App">
      <Nav />
      <SearchBox onSubmit={handleMovies} onChange={handleSearch} />
    </div>
  );
}

export default App;
