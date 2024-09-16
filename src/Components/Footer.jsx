import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
function Footer({ darkMode }) {
  return (
    <footer className={darkMode ? "fixed bottom-0 w-full p-20" : "bg-neutral-900 border-t text-white p-20"}>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <div className="mb-2">LOGO</div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="mb-4 md:mb-0 md:mr-12">
            <p className="font-bold mb-2">EXPLORE</p>
            <ul className="space-y-2">
              <li><Link to="/Work">Work</Link></li>
              <li><Link to="/About">About Me</Link></li>
              <li><Link to="/Contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li><a href="#">Behance</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-4 md:mt-0">© Josué Salazaku Design 2024</div>
      </div>
    </footer>
  );
}

export default Footer;
