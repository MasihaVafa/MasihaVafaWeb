import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Blog from "./components/BlogWrapper";
import Home from "./LandingWrapper";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/blog" component={Blog} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
