import "./App.css";
import SubTitles from "./components/Rooms/Moscow/game/SubTitles";
import React from "react";
import Room from "./components/Room";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Join } from "./components/LoginPage";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Join} />
      <Route path="/room" component={Room} />
    </Router>
  );
}

export default App;
