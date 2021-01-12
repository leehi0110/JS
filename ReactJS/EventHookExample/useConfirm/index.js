import React, { useEffect, useState, useRef } from "react";
import ReactDom from "react-dom";
import useConfirm from './useConfirm';

const App = () => {
  const deleteWord = () => console.log("Delete word");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("Are you sure?", deleteWord, abort);

  return (
    <div className="App">
      <button onClick={confirmDelete}>Delete the word</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDom.render(<App />, rootElement);
