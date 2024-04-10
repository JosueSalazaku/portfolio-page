import { Link } from "react-router-dom";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
function Navigation({ darkMode, toggleDarkMode }) {
    const [isOpen, setIsOpen] = useState(false)

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
          JOSUE <br />SALAZAKU
        </h2>
      </Link>
      <div className="flex flex-row items-start gap-5">
        <button
          onClick={toggleDarkMode}
          className="px-8  py-2 text-white rounded-md"
        >
          {darkMode ? <MdOutlineLightMode /> : <MdOutlineDarkMode className={darkMode ? "text-white" : "text-black"} />}
        </button>
        <ul className="flex flex-col justify-start items-end gap-2 font-medium text-xl">
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
    </nav>
  );
}

export default Navigation;
