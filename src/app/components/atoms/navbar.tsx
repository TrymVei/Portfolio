import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-darkPurple h-16 px-16 flex items-center">
      <ul className="flex gap-6 *:text-xl [&>li>a:hover]:text-languidLavender ease-in-out">
        <li>
          <a href="#home">Hjem</a>
        </li>
        <li>
          <a href="#about">Om meg</a>
        </li>
        <li>
          <a href="#projects">Prosjekter</a>
        </li>
        <li>
          <a href="#contact">Kontakt</a>
        </li>
      </ul>
    </nav>
  );
}
