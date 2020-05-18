import React, { useState } from "react";

const SearchBox = ({ search }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const resetSearchBox = () => {
    setSearchValue("");
  };

  const callSearch = (e) => {
    e.preventDefault();
    search(searchValue);
    resetSearchBox();
  };

  return (
    <section className="movieSearch">
      <form className="search">
        <input
          action=""
          className="searchbox"
          value={searchValue}
          onChange={handleSearch}
          placeholder="Search movies"
          type="text"
        />
        <input onClick={callSearch} type="submit" value="SEARCH" />
      </form>
    </section>
  );
};

export default SearchBox;
