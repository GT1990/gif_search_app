import React, { Component } from "react";

const SearchForm = ({ onSearch }) => {
  const input = React.createRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input.current.value);
    e.currentTarget.reset();
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <label className="is-hidden" htmlFor="search">
        Search
      </label>
      <input type="search" name="search" placeholder="Search..." ref={input} />
      <button type="submit" id="submit" className="search-button">
        <i className="material-icons icn-search">search</i>
      </button>
    </form>
  );
};

export default SearchForm;
