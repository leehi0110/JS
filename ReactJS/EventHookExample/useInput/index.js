import React from 'react';
import ReactDom from 'react-dom';
import useInput from './useinput';

const App = () => {
  const maxLen = value => value.length < 10;
  const name = useInput("Mr.",maxLen);
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDom.render(<App />, rootElement);