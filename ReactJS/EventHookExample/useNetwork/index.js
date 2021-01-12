import React, { useEffect, useState, useRef } from "react";
import ReactDom from "react-dom";
import useNetwork from './useNetwork';

const App = () => {
  const handleNetworkChange = (online) => {
    console.log(online ? "We jus went online" : "We are Offline");
  };
  const online = useNetwork(handleNetworkChange);

  return (
    <div className="App">
      <h1>{online ? "Online" : "OffLine"}</h1>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDom.render(<App />, rootElement);
