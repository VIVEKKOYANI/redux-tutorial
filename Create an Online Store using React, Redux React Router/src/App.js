import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FullComponents from "./components/FullComponents";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Login from "./components/Login";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Login} />
          <Route exact path="/quiz" component={FullComponents} />
        </div>
      </Router>
    );
  }
}

export default App;
