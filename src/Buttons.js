import React from "react";
import { useGlobalContext } from "./context";

const Buttons = () => {
  const { isLoading, page, nbPages, handlePage, hits } = useGlobalContext();

  if (isLoading === false && hits.length === 0)
    return <h5>No matching articles were found for this value</h5>;
  return (
    <div className="btn-container">
      <button disabled={isLoading} onClick={() => handlePage("dec")}>
        prev
      </button>
      <p>
        {page + 1} of {nbPages}
      </p>
      <button disabled={isLoading} onClick={() => handlePage("inc")}>
        next
      </button>
    </div>
  );
};

export default Buttons;
