import { Link } from "react-router-dom";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
function Navigation({ darkMode, toggleDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="h-32 flex flex-row justify-between items-center px-20">
      <Link to="/Home"> 
        <h2 className="font-extrabold text-3xl text-indigo-400">
          JOSUE <br /> SALAZAKU
        </h2>
      </Link>
      <div className="flex flex-row items-center gap-5">
        <button
          onClick={toggleDarkMode}
          className="px-8 py-2 text-white rounded-md"
        >
          {darkMode ? (
            <MdOutlineLightMode style={{ fontSize: "22px" }} />
          ) : (
            <MdOutlineDarkMode style={{ fontSize: "22px" }} className={darkMode ? "text-white" : "text-black"} />
          )}
        </button>
        <section className="flex flex-row justify-start items-center">
          <button className="h-20 justify-center items-center lg:hidden" onClick={openMenu}>
            {isOpen ? (
              <RxCross1 style={{ fontSize: "30px" }} />
            ) : (
              <RxHamburgerMenu style={{ fontSize: "30px" }} />
            )}
          </button>

        </section>
        {/* Conditionally render navigation links based on screen size */}
        <ul className="flex-col justify-start items-end gap-2 font-medium text-xl hidden lg:flex">
        <li className="hover:text-indigo-400 hover:delay-300 ">
            <Link to="/Work">Work</Link>
          </li>
          <li className="hover:text-indigo-400 hover:delay-300 ">
            <Link to="/About">About Me</Link>
          </li>
          <li className="hover:text-indigo-400 hover:delay-300 ">
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </div>

      {/* Overlay menu for mobile */}
      {isOpen && (
  <div
    className={
      darkMode
        ? "fixed inset-0 z-40 bg-neutral-900 backdrop-filter backdrop-blur-sm transition-opacity duration-500 text-white bg-opacity-90 text-6xl"
        : "fixed inset-0 z-40 bg-white backdrop-filter backdrop-blur-sm transition-opacity duration-500 text-black bg-opacity-90 text-6xl"
    }
    onClick={closeMenu}
  >
    <div className="flex h-full justify-center items-center">
      <ul className="flex-col justify-start space-y-20 font-bold text-7xl text-center">
        <li className="hover:text-indigo-400 hover:delay-75">
          <Link to="/Work">Work</Link>
        </li>
        <li className="hover:text-indigo-400 hover:delay-300">
          <Link to="/About">About Me</Link>
        </li>
        <li className="hover:text-indigo-400 hover:delay-75">
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>  
    </div>
  </div>
)}


    </nav>
  );
}

export default Navigation;
