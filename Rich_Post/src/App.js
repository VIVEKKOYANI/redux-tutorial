import React from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Create from "./components/Create";
import Post from "./components/Post";
import AddEdit from "./components/AddEdit";
import RichEdit from "./components/RichEdit";
import LinkeComment from "./components/LinkeComment";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" component={Create} />
          <Route exact path="/posts" component={Post} />
          <Route exact path="/add-edit" component={AddEdit} />
          <Route exact path="/rich_text" component={RichEdit} />
          <Route exact path="/like" component={LinkeComment} />
        </Router>
      </div>
    );
  }
}

export default App;
