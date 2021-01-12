import React, { useEffect, useState, useRef } from "react";
import ReactDom from "react-dom";

const App = () => {
  const { enablePrevent, disablePreven } = usePreventLeave();
  return (
    <div className="App">
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePreven}>Unprotect</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDom.render(<App />, rootElement);
