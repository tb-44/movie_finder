import React from "react";
import "./SearchBox.css";

const SearchBox = (props) => {
  return (
    <div className="searchbox">
      <div className="row">
        <section className="column">
          <form action="" onSubmit={props.handleSubmit}>
            <div className="field">
              <input
                placeholder="Search Movie"
                type="text"
                onChange={props.handleChange}
              />
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default SearchBox;
