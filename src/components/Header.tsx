import React from "react";

const Header: React.FC = () => {
  return (
    <header className="w-full py-4 bg-black text-white fixed top-0 left-0 z-10 shadow-md">
      <div className="container mx-auto px-4">
        <nav>
          <ul className="grid grid-cols-3 gap-4 text-center md:flex md:justify-center md:space-x-8">
            <li className="col-span-1">
              <a
                href="#"
                className="block py-2 hover:text-indigo-500 transition duration-300"
              >
                Home
              </a>
            </li>
            <li className="col-span-1">
              <a
                href="#about"
                className="block py-2 hover:text-indigo-500 transition duration-300"
              >
                About
              </a>
            </li>
            <li className="col-span-1">
              <a
                href="#projects"
                className="block py-2 hover:text-indigo-500 transition duration-300"
              >
                Projects
              </a>
            </li>

            {/* Second Row (2 items on small screens) */}
            <li className="col-span-1 md:col-auto">
              <a
                href="#skills"
                className="block py-2 hover:text-indigo-500 transition duration-300"
              >
                Skills
              </a>
            </li>
            <li className="col-span-1 md:col-auto">
              <a
                href="#contact"
                className="block py-2 hover:text-indigo-500 transition duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
