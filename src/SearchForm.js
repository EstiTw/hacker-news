import React, { useState } from "react";
import { useGlobalContext } from "./context";

const SearchForm = () => {
  const [query, setQuery] = useState("");
  const { handleSearch } = useGlobalContext();
  return (
    <form
      className="search-form"
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch(query);
      }}
    >
      <input
        type="text"
        className="form-input"
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
};

export default SearchForm;
