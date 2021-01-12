import React, { useEffect, useState, useRef } from "react";
import ReactDom from "react-dom";
import useBeforeLeave from './useBeforeLeave';

const App = () => {
  const begForLife = () => console.log("please dont leave");
  useBeforeLeave(begForLife);

  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDom.render(<App />, rootElement);
