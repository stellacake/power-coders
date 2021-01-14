import "./App.css";
import SubTitles from "./components/Rooms/Moscow/game/SubTitles";
import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import { Join, Chat } from "./components/LoginPage";

function App() {
	return (
		<Router>
			<Route path="/" exact component={Join} />
			<Route path="/chat" component={Chat} />
		</Router>
	);
}

export default App;
