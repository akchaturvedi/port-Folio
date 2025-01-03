import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

function Navbar() {
  const [nav, setNav] = useState(false);
  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "skills" },
    { id: 5, link: "contact" },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 fixed top-0 text-white bg-black bg-opacity-80 px-8 shadow-lg z-50">
      <div>
        <h1 className="text-4xl font-signature text-orange-400 ml-2">
          Adesh's Tech World
        </h1>
      </div>

      <ul className="hidden md:flex space-x-8 text-lg font-semibold">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="text-gray-300 hover:text-yellow-400 hover:scale-105 duration-300 cursor-pointer"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-300 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-300">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="py-6 text-3xl font-medium capitalize text-center hover:text-yellow-400 cursor-pointer"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Navbar;
