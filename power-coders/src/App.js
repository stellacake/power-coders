import "./App.css";
import SubTitles from "./components/Rooms/Moscow/game/SubTitles";
import React from "react";
import Moscow from "./components/Rooms/Moscow/Moscow";

function App() {
  return (
    <div className="App">
      <SubTitles />
      <Moscow />
    </div>
  );
}

export default App;
