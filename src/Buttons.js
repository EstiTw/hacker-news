import React from "react";
import { useGlobalContext } from "./context";

const Buttons = () => {
  const { page, nbPages, handlePage } = useGlobalContext();

  return (
    <div className="btn-container">
      <button onClick={() => handlePage("prev")}>prev</button>
      <p>
        {page + 1} of {nbPages}
      </p>
      <button onClick={() => handlePage("next")}>next</button>
    </div>
  );
};

export default Buttons;
