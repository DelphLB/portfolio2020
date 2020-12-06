import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/HomePage/Home";
import PageProjet from "./components/PageProjet";
import "./app.css";
function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/projets' component={PageProjet} />
      </Switch>
    </div>
  );
}

export default App;
