import React from "react";
import Moscow from "./components/Rooms/Moscow/Moscow";
import Newspaper from "./components/Rooms/Moscow/games/Newspaper";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Moscow />
      <Newspaper />
		</div>
	);
}

export default App;
