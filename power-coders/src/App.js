import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import { Join } from "./components/LoginPage";
import Moscow from "./components/Rooms/Moscow/Moscow";

function App() {
	return (
		<Router>
			<Route path="/" exact component={Join} />
			<Route path="/moscow" component={Moscow} />
		</Router>
	);
}

export default App;
