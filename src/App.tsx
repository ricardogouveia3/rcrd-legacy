import React from "react";
import logo from "./logo.svg";

function App() {
  return (
    <div className="text-center">
      <header className="bg-[#282c34] min-h-[100vh] flex text-white flex-col items-center justify-center text-[calc(10px + 2vmin)]">
        <img
          src={logo}
          className="pointer-events-none h-[40vmin] animate-[spin_20s_linear_infinite]"
          alt="logo"
        />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="text-[#61dafb]"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
