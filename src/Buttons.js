import React from "react";
import { useGlobalContext } from "./context";

const Buttons = () => {
  const { page, nbPages, togglePage } = useGlobalContext();

  return (
    <div className="btn-container">
      <button onClick={() => togglePage("prev")}>prev</button>
      <p>
        {page + 1} of {nbPages}
      </p>
      <button onClick={() => togglePage("next")}>next</button>
    </div>
  );
};

export default Buttons;
