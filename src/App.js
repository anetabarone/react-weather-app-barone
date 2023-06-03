import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Luckenwalde" />
        <footer>
          This project is created by Aneta Barone and is{" "}
          <a
            href="https://github.com/anetabarone/react-weather-app-barone"
            target="blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>
          .
        </footer>
      </div>
    </div>
  );
}

export default App;
