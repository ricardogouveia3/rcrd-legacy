import React from "react";
import logo from "./../assets/img/logo.svg";

function Header() {
  return (
    <header className="bg-gray-800 flex text-white items-center justify-around text-base py-3 flex-col	gap-3 md:gap-0 md:flex-row">
      <a
        className="flex flex-col md:flex-row items-center gap-2 md:gap-3"
        href="/"
      >
        <img
          src={logo}
          className="pointer-events-none size-10 md:size-16"
          alt="logo"
        />
        <h1>RCRD Legacy</h1>
      </a>
      <a
        href="https://rcrd.dev"
        target="_blank"
        className="ring-1 text-sm md:text-base ring-white p-1 md:p-2 rounded hover:bg-sky-700 transition ease-in-out delay-150"
        rel="noreferrer"
      >
        RCRD site &#8594;
      </a>
    </header>
  );
}

export default Header;
