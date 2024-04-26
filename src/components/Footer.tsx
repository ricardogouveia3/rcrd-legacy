import React from "react";
import logo from "./../assets/img/logo.svg";

function Footer() {
  return (
    <footer className="bg-gray-800 flex text-white flex-col	gap-1 md:gap-0 md:flex-row items-center justify-around text-base py-2 md:py-3 md:absolute md:bottom-0 w-screen">
      <a
        className="flex items-center gap-3"
        href="https://rcrd/dev"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={logo}
          className="hidden md:inline-block pointer-events-none size-8"
          alt="logo"
        />
        <span>RCRD</span>
      </a>
      <span>2024</span>
    </footer>
  );
}

export default Footer;
