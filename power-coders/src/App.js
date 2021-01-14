import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import { Join, Chat } from "./components/LoginPage";
import Moscow from "./components/Rooms/Moscow/Moscow";
import Newspaper from "./components/Rooms/Moscow/games/Newspaper";
import "./App.css";

function App() {
  return (
    <Router>
      <Route path='/' exact component={Join} />
      <Route path='/chat' component={Chat} />
      {/* 	<Moscow />
      <Newspaper /> */}
    </Router>
  );
}

export default App;
