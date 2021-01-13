import React from "react";
import Moscow from "./components/Rooms/Moscow/Moscow";
import Newspaper from "./components/Rooms/Moscow/games/newspaper/Newspaper";
import WhiteRussian from "./components/Rooms/Moscow/games/whiteRussian/WhiteRussian";

import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <Moscow />
      <Newspaper /> */}
      <WhiteRussian />
    </div>
  );
}

export default App;
