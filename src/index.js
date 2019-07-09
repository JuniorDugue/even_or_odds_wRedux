import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import "./styles.css";

const DEFAULT_SETTINGS = {
  gameStarted: false,
  instructionsExpanded: false
}

const rootReudcer = () => {
  return DEFAULT_SETTINGS;
};

const store = createStore(rootReudcer);

console.log("store.getState()", store.getState());
console.log("store", store);

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}



const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
