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
    <form className="search">
      <input value={searchValue} onChange={handleSearch} type="text" />
      <input onClick={callSearch} type="submit" value="SEARCH" />
    </form>
  );
};

export default SearchBox;
