import { Switch, Route, Redirect } from "react-router-dom";

import './App.css';

import AppHeader from "./AppHeader.js";
import HomePage from "./HomePage.js";
import PostForm from "./PostForm.js";
import PostView from "./PostView.js";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Switch>
        <Route exact path="/new"><PostForm /></Route>
        <Route exact path="/:postID"><PostView /></Route>
        <Route exact path="/"><HomePage /></Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
