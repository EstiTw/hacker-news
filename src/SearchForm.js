import React, { useState } from "react";
import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { handleSearch } = useGlobalContext();
  return (
    <form
      className="search-form"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input
        type="text"
        className="form-input"
        onChange={(e) => handleSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchForm;
