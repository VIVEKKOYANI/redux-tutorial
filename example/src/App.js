import React from "react";

import './App.css'
import Counters from "./components/Counters";
const App = () => (
  <div className="App">
    <Counters count={42} />
  </div>
);

export default App;
