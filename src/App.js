import React, { useReducer, useEffect } from "react";
import Nav from "./components/Nav/Nav";
import Movie from "./components/Movie/Movie";
import spinner from "./assets/loading.gif";
import SearchBox from "./components/SearchBox/SearchBox";
import { initialState, reducer } from "./reducer/index";
import axios from "axios";
import "./App.css";

const REACT_APP_URL = `https://www.omdbapi.com/?s=man&apikey=${process.env.REACT_APP_APIID}`;

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios.get(REACT_APP_URL).then((response) => {
      dispatch({
        type: "SEARCH_MOVIES_SUCCESS",
        payload: response.data.Search,
      });
    });
  }, []);

  const search = (searchValue) => {
    dispatch({
      type: "SEARCH_MOVIES_REQUEST",
    });

    axios(
      `https://www.omdbapi.com/?s=${searchValue}&apikey=${process.env.REACT_APP_APIID}`
    ).then((res) => {
      if (res.data.Response === "True") {
        dispatch({
          type: "SEARCH_MOVIES_SUCCESS",
          payload: res.data.Search,
        });
      } else {
        dispatch({
          type: "SEARCH_MOVIES_FAILURE",
          error: res.data.Error,
        });
      }
    });
  };

  const { movies, errorMessage, loading } = state;

  const retrievedMovies =
    loading && !errorMessage ? (
      <img className="spinner" src={spinner} alt="Loading spinner" />
    ) : errorMessage ? (
      <div className="errorMessage">{errorMessage}</div>
    ) : (
      movies.map((movie, index) => (
        <Movie key={`${index}-${movie.Title}`} movie={movie} />
      ))
    );

  return (
    <div className="App">
      <div className="m-container">
        <Nav text="MovieFinder" />
        <SearchBox search={search} />
        <p className="App-intro">Movies from search</p>
        <div className="movies">{retrievedMovies}</div>
      </div>
    </div>
  );
};

export default App;
