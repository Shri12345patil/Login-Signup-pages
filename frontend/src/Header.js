import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Userdetail from "./Userdetail";
import App from "./App";
export default function Header() {
  return (
    <Router>
      <div>
          <Switch>
          <Route exact path="/"><App /></Route>
          <Route path="/Userdetail"> <Userdetail /> </Route>
        </Switch>
      </div>
    </Router>
  );
}


