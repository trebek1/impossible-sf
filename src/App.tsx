import React from "react";
import vegan from "./vegan.jpg";
import "./App.css";

const App: React.FC = () => (
  <div className="App">
    <header className="App-header">
      <img src={vegan} className="App-logo" alt="logo" />
      <p>
        Living in SF and Looking for Vegan options downtown has always been
        difficult. Thus, this site was born.
      </p>
    </header>
  </div>
);

export default App;
