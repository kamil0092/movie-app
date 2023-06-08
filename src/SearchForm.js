import React, { useState } from "react";
import SearchIcon from "./search.svg";
import "./App.css";
import axios from "axios";

const SearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://api.tvmaze.com/search/shows?q=${query}`
      );
      onSearch(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="app">
        <h1>TV Show Search</h1>
        <div className="search">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search TV Shows"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit">
              <img src={SearchIcon} alt="search" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SearchForm;
