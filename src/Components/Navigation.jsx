import { Link } from "react-router-dom";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";

function Navigation({ darkMode, toggleDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="h-44 flex flex-row justify-between items-center px-20">
      <Link to="/Home">
        <h2 className="font-extrabold text-2xl">
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
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Work">Work</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </div>
      {/* Overlay menu for mobile */}
      {isOpen && (
        <div
          className={
            darkMode
              ? "fixed inset-0 bg-neutral-800 bg-opacity-75"
              : "fixed bg-white inset-0 bg-opacity-75"
          }
          onClick={closeMenu}
        ></div>
      )}
    </nav>
  );
}

export default Navigation;
