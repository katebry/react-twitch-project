import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import Games from "../src/components/Games";
import Header from "../src/components/Header";
import Streams from "../src/components/Streams";

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={Games} />
      <Route exact path="/top-streams" component={Streams} />
    </Router>
  );
}

export default App;
