import { Link } from "react-router-dom";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

function Navigation({ darkMode, toggleDarkMode }) {
  return (
    <nav className="h-44 flex flex-row justify-between items-center px-20">
      <Link to="/Home">
        <h2 className="font-extrabold text-2xl">
          JOSUE <br />SALAZAKU
        </h2>
      </Link>
      <div className="flex items-center">
        <button
          onClick={toggleDarkMode}
          className="px-4 py-2 bg-gray-800 text-white rounded-md"
        >
          {darkMode ? <MdOutlineLightMode /> : <MdOutlineDarkMode/>}
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
