import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/HomePage/Home";
import PageProjet from "./components/Projets/PageProjet";
import { ThemeContextProvider } from "./components/reusables/contexts/Theme";
import "./app.css";
function App() {
  return (
    <ThemeContextProvider>
      <div className='App'>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/projets' component={PageProjet} />
        </Switch>
        <div class='lines'>
          <div class='line'></div>
          <div class='line'></div>
          <div class='line'></div>
          <div class='line'></div>
        </div>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
