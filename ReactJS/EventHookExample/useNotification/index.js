import React, { useEffect, useState, useRef, useCallback } from "react";
import ReactDom from "react-dom";
import useNotification from './useNotification';

const App = () => {
  const triggerNotif = useNotification("Check", { body: "test Check" });

  return (
    <div className="App">
      <button onClick={triggerNotif}>Hello</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDom.render(<App />, rootElement);
